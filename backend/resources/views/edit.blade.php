@extends('app')

@section('titulo', 'Editar Freelancer')

@section('conteudo')
    <h1>Editar Freelancer</h1>
    <form action="{{ route('devfreelas.update', $devfreela) }}" method="POST" enctype="multipart/form-data">
        @method('PUT')

        @include('_form')

    </form>
@endsection
