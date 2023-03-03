import { Component } from '@angular/core';

interface Question {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-perguntas-frequentes',
  templateUrl: './perguntas-frequentes.component.html',
  styleUrls: ['./perguntas-frequentes.component.sass'],
})
export class PerguntasFrequentesComponent {
  questions: Question[] = [
    {
      question: 'Consigo acessar o Hub UniQ da minha casa?',
      answer:
        'Essa funcionalidade ainda não está disponível. Atualmente dependemos da disponibilidade de infraestrutura de rede, desta forma, o acesso só é possível via rede da empresa com acesso ao servidor do Hub.',
    },
    {
      question: 'Consigo acessar o Hub UniQ via meu celular?',
      answer:
        'Sim, desde que você esteja conectado à rede da empresa com acesso ao servidor do Hub, porém, devido ao tamanho da tela do celular em relação a um monitor convencional, a resolução pode afetar a experiência de uso.',
    },
    {
      question:
        'Como faço para cadastrar meu usuário (e-mail) e uma senha para acessar o portal?',
      answer:
        'O cadastro de um novo usuário é feito apenas por um usuário com perfil de administrador, recomendamos que procure o gestor de sua área para avaliar a necessidade de acesso e requisitar junto a equipe responsável.',
    },
    {
      question:
        'Não encontro uma estação, terminal, abrigo ou ponto específico no UniQ Hub.',
      answer:
        'As informações referentes às localidades (Terminais, Estações, Pontos e Abrigos) estão disponíveis no menu Locais, onde deve-se inserir os dados para a busca nos filtros disponíveis conforme sua necessidade. Caso esteja utilizando condições válidas e a busca não trouxer resultado é necessário cadastrar o local em questão.',
    },
    {
      question: 'Não encontro um ônibus específico no UniQ Hub.',
      answer:
        'As informações referentes aos ônibus estão disponíveis no menu Veículos, onde deve-se inserir os dados para busca nos filtros disponíveis conforme sua necessidade. Caso esteja utilizando condições válidas e a busca não trouxer resultado é necessário cadastrar o veículo em questão.',
    },
    {
      question:
        'Como faço para cadastrar uma localidade nova (Terminais, Estações, Pontos e Abrigos) no UniQ Hub?',
      answer:
        'Para realizar tal cadastro é necessário que seu usuário tenha permissão de “Administrador” do sistema. A partir disso vá até o menu Locais, clique no botão Incluir (a tela aberta mostrará as opções disponíveis na aba Detalhe), preencha adequadamente os campos disponíveis e adicione a imagem referente a planta baixa do local (esta imagem deve ser fornecida pela equipe responsável ou copiada de algum cadastro de localidade válido já existente). Para complementar o cadastro da aba Detalhes clique no botão Setores e adicione os setores em que os dispositivos existentes nas localidades vão operar. Após preencher a aba Detalhe, vá para a aba Áudio e Chaves de Configuração e os preencha adequadamente incluindo o parâmetro adequado para o local cadastrado.',
    },
    {
      question: 'Como faço para cadastrar um ônibus novo no UniQ Hub?',
      answer:
        'Para realizar tal cadastro é necessário que seu usuário tenha permissão de “Administrador” do sistema. A partir disso vá até o menu Veículos, clique no botão Incluir (a tela aberta mostrará as opções disponíveis na aba Detalhe), preencha adequadamente os campos disponíveis e adicione a imagem referente a Representação do Veículo (esta imagem deve ser fornecida pela equipe responsável ou copiada de algum cadastro de Veículo válido já existente). Para complementar o cadastro da aba Detalhes clique no botão Setores e adicione os setores em que os dispositivos existentes no veículo vão operar. ',
    },
    {
      question: 'Não encontro um determinado dispositivo no UniQ Hub.',
      answer:
        'As informações referentes aos dispositivos estão disponíveis no menu Dispositivos, onde, para a busca, deve-se inserir os dados (conforme filtros disponíveis de acordo com sua necessidade). Caso esteja utilizando condições válidas e a busca não trouxer resultado é necessário cadastrar o dispositivo em questão.',
    },
    {
      question: 'Como cadastrar um novo dispositivo no UniQ Hub?',
      answer:
        'Para realizar tal cadastro é necessário que seu usuário tenha permissão de “Administrador” do sistema. A partir disso vá até o menu Dispositivo, clique no botão Incluir (a tela aberta mostrará as opções disponíveis) e preencha adequadamente os campos necessários. Para dispositivos que possuem Planta Baixa do Local adicione a imagem referente (esta imagem deve ser fornecida pela equipe responsável pelo projeto ou copiada de algum cadastro de Dispositivo válido já existente). Para completar o cadastro clique em Configurações e preencha adequadamente incluindo os parâmetros adequados para o dispositivo cadastrado.',
    },
    {
      question:
        'É possível enviar comandos para os dispositivos nas localidades?',
      answer:
        'Sim. Vá até o menu Ações – há opções para envio de ações imediatas (Imediata) ou agendadas (Agendamento).',
    },
    {
      question: 'Quais ações estão disponíveis para uso no UniQ Hub?',
      answer:
        'As ações são condicionadas ao tipo do dispositivo, para ter acesso a elas é necessário clicar no menu Ações, selecionar se é Imediata ou Agendamento e selecionar o local ou veículo. Após a seleção, você deve escolher o Tipo Dispositivo e, conforme a opção, escolher o Dispositivo. De acordo com as opções cadastradas na seleção de Comando é possível escolher o comando/ação conforme sua necessidade.',
    },
  ];
}
