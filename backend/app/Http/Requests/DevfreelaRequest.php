<?php

namespace App\Http\Requests;

use App\Rules\ValidaCep;
use App\Services\ViaCEP;
use Illuminate\Foundation\Http\FormRequest;

class DevfreelaRequest extends FormRequest
{
    public function __construct(
        public ViaCEP $viaCep
    ){}

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Função para validar os campos do formulário
     *
     * @return array
     */
    public function rules()
    {
        $regras = [
            'nome_completo' => ['required', 'max:100'],
            'cpf' => ['required', 'size:14'],
            'email' => ['required', 'email', 'max:100'],
            'telefone' => ['required', 'size:15'],
            'logradouro' => ['required', 'max:255'],
            'numero' => ['required', 'max:20'],
            'bairro' => ['required', 'max:50'],
            'cidade' => ['required', 'max:50'],
            'estado' => ['required', 'max:2'],
            'cep' => ['required', new ValidaCep($this->viaCep)],
            'foto_usuario' => ['image']
        ];
        // Se o metodo for POST, ou seja, quando estiver cadastrando será obrigatório foto_usuario
        if ($this->isMethod('post')) {
            $regras['foto_usuario'] = ['required', 'image'];
        }

        return $regras;
    }
}
