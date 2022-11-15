@extends('layouts.dashboard');

@section('content')

<a href="{{route('admin.posts.create')}}">Create a new post</a>
@foreach ($posts as $post  )
{{$post['title']}}

@endforeach
@endsection
