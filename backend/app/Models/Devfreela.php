<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Devfreela extends Model
{
    use HasFactory;

    // Define os campos que podem ser gravados no BD
    protected $fillable = ['nome_completo', 'cpf', 'email', 'telefone', 'logradouro', 'numero', 'complemento', 'bairro', 'cidade', 'estado', 'cep', 'codigo_ibge', 'foto_usuario'];

    // Define os campos que serão usados para listar os freelas
    protected $visible = ['nome_completo', 'cidade', 'foto_usuario', 'reputacao'];

    // $appends Adiciona o campo reputação de forma virtual
    protected $appends = ['reputacao'];

    // Monta a URL da foto do usuario
    public function getFotoUsuarioAttribute(string $valor) {
        return config('app.url'). '/' . $valor;
    }

    // Função para criar o valor do campo reputação de forma randomica
    public function getReputacaoAttribute($valor) {
        return mt_rand(1, 5);
    }

    // Função estatica para buscar os freelas cadastrados pelo código IBGE, com limite de 6, pois no front foi definido para mostrar 6.
    static public function buscaPorCodigoIbge(int $codigoIbge) {
        return self::where('codigo_ibge', $codigoIbge)->limit(6)->get();
    }

    // Função estatica para retornar  q quantidade de freelancers cadastrados.
    static public function quantidadePorCodigoIbge(int $codigoIbge) {
        $quantidade = self::where('codigo_ibge', $codigoIbge)->count();

        // Se maior que 6 retorna o restante, se menor que 6 retorna 0.
        return $quantidade > 6 ? $quantidade - 6 : 0;
    }
}
