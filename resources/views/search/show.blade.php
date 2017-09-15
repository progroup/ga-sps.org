{{-- @extends('layouts.app') --}}

{{-- @section('meta-title', "GaSPS Search Results: {$query}") --}}
{{-- @section('meta-description', "GaSPS {$query} search results.") --}}

{{-- @section('content')
    <section class="section">
        <div class="filterable container">
            <scan-view query="{{{ $query }}}"></scan-view>
        </div>
    </section>
@stop --}}

<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>{{ config('app.name', 'Laravel') }}</title>
  <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">

  <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
  <!-- Scripts -->
  <script>
    window.App = {!! json_encode([
      'csrfToken' => csrf_token(),
      'user' => Auth::user(),
      'signedIn' => Auth::check(),
      'foo' => 'bar'
    ])!!};
  </script>
  <style>
    .ais-highlight em {
      background-color: #ff9;
      font-style: normal;
    }
  </style>
</head>

<body>
    <div id="app">
        @include('layouts.nav')
        @include('layouts.hero')
        <section class="section">
            <scan-view query={{{ $query }}}></scan-view>
        </section>
    </div>
    <script src="{{ mix('/js/app.js') }}"></script>
</body>
</html>