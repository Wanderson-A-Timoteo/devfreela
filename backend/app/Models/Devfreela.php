<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devfreela extends Model
{
    use HasFactory;

    protected $fillable = ['nome_completo', 'cpf', 'email', 'telefone', 'logradouro', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'cep', 'codigo_ibge', 'foto_usuario'];

    // Função estatica para buscar os freelas cadastrados, com limite de 6, pois no front foi definido para mostrar 6.
    static public function buscaPorCodigoIbge(int $codigoIbge) {
        return self::where('codigo_ibge', $codigoIbge)->limit(6)->get();
    }

    // Função estatica para contar os freelancers cadastrados.
    static public function quantidadePorCodigoIbge(int $codigoIbge) {
        $quantidade = self::where('codigo_ibge', $codigoIbge)->count();

        // Se maior que 6 retorna o restante, se menor que 6 retorna 0.
        return $quantidade > 6 ? $quantidade - 6 : 0;
    }
}
