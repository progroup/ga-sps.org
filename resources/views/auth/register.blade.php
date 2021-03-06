@extends('layouts.app')

@section('content')
<section class="section">
    <div class="container">
        <div class="columns">
            <div class="column is-4">
                <div class="content">
                    <h1>Register</h1>
                    <form method="POST" action="{{ route('register') }}">
                        {{ csrf_field() }}

                        <div class="field">
                            <label for="name" class="label">Name</label>

                            <div class="control">
                                <input id="name" type="text" class="input{{ $errors->has('name') ? ' is-danger' : '' }}" name="name" value="{{ old('name') }}" autofocus>
                            </div>
                            @if ($errors->has('name'))
                                <p class="help is-danger">{{ $errors->first('name') }}</p>
                            @endif
                        </div>

                        <div class="field">
                            <label for="email" class="label">E-Mail Address</label>

                            <div class="control">
                                <input id="email" type="email" class="input{{ $errors->has('email') ? ' is-danger' : '' }}" name="email" value="{{ old('email') }}">
                            </div>
                            @if ($errors->has('email'))
                                <p class="help is-danger">{{ $errors->first('email') }}</p>
                            @endif
                        </div>

                        <div class="field">
                            <label for="password" class="label">Password</label>

                            <div class="control">
                                <input id="password" type="password" class="input{{ $errors->has('password') ? ' is-danger' : '' }}" name="password">
                            </div>
                            @if ($errors->has('password'))
                                <p class="help is-danger">{{ $errors->first('password') }}</p>
                            @endif
                        </div>

                        <div class="field">
                            <label for="password-confirm" class="label">Confirm Password</label>

                            <div class="control">
                                <input id="password-confirm" type="password" class="input" name="password_confirmation">
                            </div>
                        </div>

                        <div class="field">
                            <div class="control">
                                <button type="submit" class="button is-primary">
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
