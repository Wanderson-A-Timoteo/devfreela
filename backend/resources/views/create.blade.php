@extends('app')

@section('titulo', 'Cadastrar Freelancers')

@section('conteudo')
    <h1>Cadastrar Novo Freelancer</h1>
    <form action="{{ route('devfreelas.store') }}" method="POST" enctype="multipart/form-data">

        @include('_form')

    </form>
@endsection
