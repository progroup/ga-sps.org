<?php

namespace App\Http\Controllers;

use App\PageHeader;
use Illuminate\Http\Request;

class PageHeadersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('@videa.page-headers.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PageHeader  $pageHeader
     * @return \Illuminate\Http\Response
     */
    public function show(PageHeader $pageHeader)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PageHeader  $pageHeader
     * @return \Illuminate\Http\Response
     */
    public function edit(PageHeader $pageHeader)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PageHeader  $pageHeader
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PageHeader $pageHeader)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PageHeader  $pageHeader
     * @return \Illuminate\Http\Response
     */
    public function destroy(PageHeader $pageHeader)
    {
        //
    }
}
