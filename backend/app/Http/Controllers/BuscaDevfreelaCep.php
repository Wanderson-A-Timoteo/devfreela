<?php

namespace App\Http\Controllers;

use App\Models\Devfreela;
use App\Services\ViaCEP;
use Illuminate\Http\Request;

class BuscaDevfreelaCep extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, ViaCEP $viaCEP)
    {
        $endereco = $viaCEP->buscar($request->cep);

        if($endereco === false) {
            return response()->json(['erro'=>'Cep inválido'], 400);
        }
        return [
            'devfreelas' => $devfreelas = Devfreela::buscaPorCodigoIbge($endereco['ibge']),
            'quantidade_devfreelas' => Devfreela::quantidadePorCodigoIbge($endereco['ibge'])
        ];
    }
}
