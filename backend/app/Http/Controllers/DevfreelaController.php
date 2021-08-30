<?php

namespace App\Http\Controllers;

use App\Models\Devfreela;
use Illuminate\Http\Request;

class DevfreelaController extends Controller
{
    // Função para listar os freelancers cadastrados no Banco de Dados SQLite
    public function index() {
        // Model Devfreela busca todos os dados no Banco de Dados e envia para a variável  $devfreelas
        $devfreelas = Devfreela::get();

        // Retorna a view index com um array contendo todos os dados da variável  $devfreelas
        return view('index', [
            'devfreelas' => $devfreelas
        ]);
    }

    // Função que retorna a view create com o form para cadastrar novo Freelancer
    public function create() {
        return view('create');
    }

    // Função para cadastrar novo Freelancer
    public function store(Request $request) {
        $dados = $request->except('_token'); // Pega todos os dados da requisição, exceto o _token
        $dados['foto_usuario'] = $request->foto_usuario->store('public'); // Envia a foto do usuario para o diretório storage/app/public

        Devfreela::create($dados); // Envia os dados para o Model Devfreela cadastrar novo freelancer com os dados recebidos pela requisição

        return redirect()->route('devfreelas.index'); // Redireciona para a página inicial do sistema
    }

    // Função para editar um cadastro no Banco de Dados
    public function edit(int $id) {
        // Metodo "findOrfail" busca no Banco de Dados o id do Freelancer que foi solicitado na requisição editar e envia para a
        // variável $devfreela, caso não encontre ele retona um erro 404
        $devfreela = Devfreela::findOrfail($id);

        // Retorna a view com o id do freelancer cadastrado
        return view('edit', [
            'devfreela' => $devfreela
        ]);
    }

    // Função para atualizar as informações de um freelancer
    public function update(int $id, Request $request) {
        // Metodo "findOrfail" busca no Banco de Dados o id do Freelancer que foi solicitado na requisição editar e envia para a
        // variável $devfreela, caso não encontre ele retona um erro 404
        $devfreela = Devfreela::findOrfail($id);

        // Pega todos os dados da requisição, exceto o _token e o method, então envia os outros dados para a váriavel $dados
        $dados = $request->except(['_token', '_method']);

        // Analisa se tem ou não uma foto para atualizar
        if($request->hasFile('foto_usuario')) {
            $dados['foto_usuario'] = $request->foto_usuario->store('public'); // Se tem foto para atualizar, envia para o diretório storage/app/public
        }

        // Atualiza as informações do usuario
        $devfreela->update($dados);

        // Redireciona para a página inicial do sistema
        return redirect()->route('devfreelas.index');
    }

    // Função para excluir um cadastro
    public function destroy(int $id) {
        // Metodo "findOrfail" busca no Banco de Dados o id do Freelancer que foi solicitado na requisição excluir e envia para a
        // variável $devfreela, caso não encontre ele retona um erro 404
        $devfreela = Devfreela::findOrfail($id);

        // Metodo para excluir
        $devfreela ->delete();

        // Após excluir o cadastro ele retorna para a página inicial de listagem com o item excluido.
        return redirect()->route('devfreelas.index');
    }
}
