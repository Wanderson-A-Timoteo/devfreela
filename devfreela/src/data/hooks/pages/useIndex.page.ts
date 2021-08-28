import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState(''),
  cepValido = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]),
  [erro, setErro] = useState(''),
  [buscaFeita, setBuscaFeita] = useState(false),
  [carregando, setCarregando] = useState(false),
  [devfreelas, setDevfreelas] = useState([] as UserShortInterface[]),
  [devfreelaRestantes, setDevfreelaRestantes] = useState(0);

  async function buscarProfissionais(cep: string) {
    setBuscaFeita(false);
    setCarregando(true);
    setErro('');

    try{
      const { data } = await ApiService.get<{
        devfreelas: UseShortInterface[],
        quantidade_devfreelas: number;
      }>('/api/devfreela-cidade?cep='+cep.replace(/\D/g));
      setDevfreelas(data.devfreelas);
      setDevfreelasRestantes(data.quantidade_devfreelas);
      setBuscaFeita(true);
      setCarregando(false);
    }catch(error){
      setErro('CEP não encontrado');
      setCarregando(false);
    }
    
  }
  
  return {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    devfreelas,
    buscaFeita,
    carregando,
    devfreelaRestantes,
  };
}