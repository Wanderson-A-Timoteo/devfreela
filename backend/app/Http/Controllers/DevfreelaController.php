<?php

namespace App\Http\Controllers;

use App\Models\Devfreela;
use Illuminate\Http\Request;

class DevfreelaController extends Controller
{
    public function index() {
        $devfreelas = Devfreela::get();
        return view('index', [
            'devfreelas' => $devfreelas
        ]);
    }

    public function create() {
        return view('create');
    }

    public function store(Request $request) {
        $dados = $request->except('_token');
        $dados['foto_usuario'] = $request->foto_usuario->store('public');

        Devfreela::create($dados);

        return redirect()->route('devfreelas.index');
    }
}
