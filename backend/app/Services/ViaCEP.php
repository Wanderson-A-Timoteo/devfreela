<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ViaCEP {
    // Consulta cep no ViaCep
    public function buscar(string $cep) {
        // URL da ViaCep
        $url = sprintf('https://viacep.com.br/ws/%s/json/', $cep);

        $resposta = Http::get($url);

        // Se a busca falhar retorna falso
        if($resposta->failed()) {
            return false;
        }

        // Se a busca deu certo, os dados json são enviados para a variável $dados
        $dados = $resposta->json();

        if(isset($dados['erro']) && $dados['erro'] === true) {
            return false;
        }

        return $dados;
    }
}
