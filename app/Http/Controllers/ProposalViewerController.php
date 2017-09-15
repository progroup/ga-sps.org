<?php

namespace App\Http\Controllers;

use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProposalViewerController extends Controller
{

  /**
   * Display a listing of the resource.
   * GET /proposal-viewer
   *
   * @return Response
   */
  public function index()
  {
    return view('@videa.proposal-viewer.index');
  }

  /**
   * Display the specified resource.
   * GET /proposal-viewer/show
   *
   * @return Response
   */
  public function show()
  {
    $input = ['file' => request()->file('file')];
    $rules = ['file' => 'mimes:xml' ];
    $validator = Validator::make($input, $rules);

    if (!request()->file('file'))
    {
      return Redirect::route('proposal-viewer.home')
        ->with('flash_message', 'Please "Select an XML file".');
    }

    if ($validator->fails())
    {
      return Redirect::route('proposal-viewer.home')
        ->with('flash_message', 'The provided file was not an XML file.');
    }

    $xml = simplexml_load_string(File::get(request()->file('file')));
    $namespaces = $xml->getNamespaces(true);

    if (!$xml->Proposal)
    {
      return Redirect::route('proposal-viewer.home')
        ->with('flash_message', 'The provided XML file does not appear to be in the right format. "Select an XML file".');
    }

    $availList = json_decode(json_encode((array) $xml->Proposal->AvailList), 1);
    $avails = $availList['AvailLineWithDetailedPeriods'];
    $availsWithRating = [];


    foreach($avails as $avail)
    {
      if (!empty( $avails[0] ))
      {
        foreach($avail['Periods'] as $periods)
        {
          if( !empty($avail['Periods']['DetailedPeriod'][0]) )
          {
            foreach ($avail['Periods']['DetailedPeriod'] as $period)
            {
              $daypart = $avail['DaypartName'];
              $rate = (float) $period['Rate'];
              $rating = (float) $period['DemoValues']['DemoValue'];

              if($rating > 0)
              {
                $availsWithRating[] = [
                  'daypart' => $daypart,
                  'rate' => $rate,
                  'rating' => $rating,
                  'cpp' => $rate / $rating
                ];
              }
            }
          }
          else
          {
            $daypart = $avail['DaypartName'];
            $rate = (float) $avail['Periods']['DetailedPeriod']['Rate'];
            $rating = (float) $avail['Periods']['DetailedPeriod']['DemoValues']['DemoValue'];

            if($rating > 0)
            {
              $availsWithRating[] = [
                'daypart' => $daypart,
                'rate' => $rate,
                'rating' => $rating,
                'cpp' => $rate / $rating
              ];
            }
          }

          // foreach ($periods['DetailedPeriod'] as $period)
          // {
          //   $daypart = $avail['DaypartName'];
          //   $rate = (float) $period['Rate'];
          //   $rating = (float) $period['DemoValues']['DemoValue'];

          //   if($rating > 0)
          //   {
          //     $availsWithRating[] = [
          //         'daypart' => $daypart,
          //         'rate' => $rate,
          //         'rating' => $rating,
          //         'cpp' => $rate / $rating
          //     ];
          //   }
          // }
        }
      }
    }



    $dayparts = array_pluck($availsWithRating, 'daypart');
    $daypartsCount = array_count_values($dayparts);
    $daypartsSummary = [];

    foreach ($availsWithRating as $avail)
    {
      $daypartsSummary[$avail['daypart']] = 0;
    }

    foreach ($availsWithRating as $avail)
    {
      $daypartsSummary[$avail['daypart']] += (float) $avail['cpp'] / (int) $daypartsCount[$avail['daypart']];
    }

    return view('@videa.proposal-viewer.show', compact('xml', 'namespaces', 'daypartsSummary'));

  }
}
