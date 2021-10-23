<?php

namespace App\Rules;

use App\Services\ViaCEP;
use Illuminate\Contracts\Validation\Rule;

 class ValidaCep implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(
        public ViaCEP $viaCep
    ){}

    /**
     * Function passes recebe o valor de cep enviado pela DevfreelaRequest
     * Determine se a regra de validação passa, retornando um boolean.
     * se true passou, se false não passou
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        /* Remove os trasos e espaços do cep enviado pela DevfreelaRequest */
        $cep = str_replace('-', '', $value);

        /* Em Services/ViaCep quando não encontramos o cep retornamos false, ou seja, aqui quando retornar um
        array será true por isso precisamos definir os dois pontos de exclamação (!!) para forçar ele retornar
        sempre um boolean */
        return !! $this->viaCep->buscar($cep);
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Cep Inválido!';
    }
}
