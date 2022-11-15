@extends('layouts.dashboard')

@section('content')
    <form action="{{route('admin.posts.store')}}" method="POST">
        @csrf
        

    </form>
@endsection
