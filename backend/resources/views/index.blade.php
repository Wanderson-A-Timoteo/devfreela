@extends('app')

@section('titulo', 'Página Inicial')

@section('conteudo')
    <h1>Lista de Freelancers</h1>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Telefone</th>
            <th scope="col">Bairro</th>
            <th scope="col">Cidade</th>
            <th scope="col">Ações</th>
        </tr>
        </thead>
        <tbody>
            @forelse ($devfreelas as $devfreela)
                <tr>
                    <th scope="row">{{ $devfreela->id }}</th>
                    <td>{{ $devfreela->nome_completo }}</td>
                    <td>{{ $devfreela->telefone }}</td>
                    <td>{{ $devfreela->bairro }}</td>
                    <td>{{ $devfreela->cidade }}</td>
                    <td>
                        <a href="{{ route('devfreelas.edit', $devfreela) }}" class="btn btn-primary">Editar</a>
                        <a href="{{ route('devfreelas.destroy', $devfreela) }}" class="btn btn-danger" onclick="return confirm('Tem certeza que deseja excluir?')">Excluir</a>
                    </td>
                </tr>
            @empty
                <tr>
                    <th></th>
                    <td>Nenhum registro cadastrado!</td>
                    <td></td>
                    <td></td>
                </tr>
            @endforelse
        </tbody>
    </table>
    <a href="{{ route('devfreelas.create') }}" class="btn btn-success">Novo Freela</a>
@endsection
