
    const listaLivrosBiblia = [
      { nome: "Gênesis", caps: 50 }, { nome: "Êxodo", caps: 40 }, { nome: "Levítico", caps: 27 },
      { nome: "Números", caps: 36 }, { nome: "Deuteronômio", caps: 34 }, { nome: "Josué", caps: 24 },
      { nome: "Juízes", caps: 21 }, { nome: "Rute", caps: 4 }, { nome: "1 Samuel", caps: 31 },
      { nome: "2 Samuel", caps: 24 }, { nome: "1 Reis", caps: 22 }, { nome: "2 Reis", caps: 25 },
      { nome: "1 Crônicas", caps: 29 }, { nome: "2 Crônicas", caps: 36 }, { nome: "Esdras", caps: 10 },
      { nome: "Neemias", caps: 13 }, { nome: "Ester", caps: 10 }, { nome: "Jó", caps: 42 },
      { nome: "Salmos", caps: 150 }, { nome: "Provérbios", caps: 31 }, { nome: "Eclesiastes", caps: 12 },
      { nome: "Cantares", caps: 8 }, { nome: "Isaías", caps: 66 }, { nome: "Jeremias", caps: 52 },
      { nome: "Lamentações", caps: 5 }, { nome: "Ezequiel", caps: 48 }, { nome: "Daniel", caps: 12 },
      { nome: "Oséias", caps: 14 }, { nome: "Joel", caps: 3 }, { nome: "Amós", caps: 9 },
      { nome: "Obadias", caps: 1 }, { nome: "Jonas", caps: 4 }, { nome: "Miquéias", caps: 7 },
      { nome: "Naum", caps: 3 }, { nome: "Habacuque", caps: 3 }, { nome: "Sofonias", caps: 3 },
      { nome: "Ageu", caps: 2 }, { nome: "Zacarias", caps: 14 }, { nome: "Malaquias", caps: 4 },
      { nome: "Mateus", caps: 28 }, { nome: "Marcos", caps: 16 }, { nome: "Lucas", caps: 24 },
      { nome: "João", caps: 21 }, { nome: "Atos", caps: 28 }, { nome: "Romanos", caps: 16 },
      { nome: "1 Coríntios", caps: 16 }, { nome: "2 Coríntios", caps: 13 }, { nome: "Gálatas", caps: 6 },
      { nome: "Efésios", caps: 6 }, { nome: "Filipenses", caps: 4 }, { nome: "Colossenses", caps: 4 },
      { nome: "1 Tessalonicenses", caps: 5 }, { nome: "2 Tessalonicenses", caps: 3 }, { nome: "1 Timóteo", caps: 6 },
      { nome: "2 Timóteo", caps: 4 }, { nome: "Tito", caps: 3 }, { nome: "Filemom", caps: 1 },
      { nome: "Hebreus", caps: 13 }, { nome: "Tiago", caps: 5 }, { nome: "1 Pedro", caps: 5 },
      { nome: "2 Pedro", caps: 3 }, { nome: "1 João", caps: 5 }, { nome: "2 João", caps: 1 },
      { nome: "3 João", caps: 1 }, { nome: "Judas", caps: 1 }, { nome: "Apocalipse", caps: 22 }
    ];
    const listaNovoTestamento = listaLivrosBiblia.slice(39);

    let usuariosCadastrados = [
      { nome: "Diego Iaene", email: "diego.iaene@kemuelconnect.com", senha: "123", cargo: "Administrador", pontos: 980, iniciais: "DI" },
      { nome: "Marcos Silva", email: "marcos@kemuelconnect.com", senha: "123", cargo: "Jovem", pontos: 860, iniciais: "MS" }
    ];

    let usuarioLogado = null;

    let eventosBancoDeDados = [
      { id: 1, nome: "Culto JA Especial", data: "2026-08-08", horario: "18:00", local: "Templo Central", categoria: "Espiritual", descricao: "Louvor e comunhão.", pontos: 50 },
      { id: 2, nome: "Ação Solidária de Inverno", data: "2026-08-15", horario: "08:30", local: "Praça da Cidade", categoria: "Solidário", descricao: "Entrega de agasalhos.", pontos: 100 }
    ];

    let dataAtualCalendario = new Date(2026, 7, 1);
    let diaSelecionadoCalendario = "2026-08-08";
    let filtroCategoriaAtivo = "todos";

    let rankingBancoDeDados = [
      { id: 1, nome: "Diego Iaene", iniciais: "DI", cargo: "Administrador", pontos: 980 },
      { id: 2, nome: "Marcos Silva", iniciais: "MS", cargo: "Jovem", pontos: 860 }
    ];

    let desafiosBancoDeDados = [
      { id: 1, titulo: "7 Dias de Oração", descricao: "Ore por 7 dias consecutivos.", categoria: "Espiritual", pontos: 120, meta: 7, progresso: 4, prazo: "2026-08-10" },
      { id: 2, titulo: "Convide um Amigo", descricao: "Traga um amigo para o culto.", categoria: "Evangelismo", pontos: 80, meta: 1, progresso: 0, prazo: "2026-08-31" }
    ];

    let evangelismoBancoDeDados = [
      { id: 1, nome: "Fernanda Alves", data: "2026-07-28", tipo: "Visita", observacao: "Demonstrou interesse.", status: "Em acompanhamento" }
    ];

    let notificacoesBancoDeDados = [
      { id: 1, tipo: "evento", titulo: "Novo evento cadastrado", mensagem: "Culto JA Especial adicionado para 08/08.", data: "2026-08-01T10:00:00", lida: false }
    ];

    document.addEventListener("DOMContentLoaded", () => {
      inicializarSeletorLivrosBiblia();
      inicializarSeletorAnoBiblico();
      carregarTextoBiblia();
    });

    // SISTEMA DE AUTH (LOGIN / CADASTRO)
    function alternarAbaAuth(aba) {
      if (aba === 'login') {
        document.getElementById('form-login').classList.remove('hidden');
        document.getElementById('form-cadastro').classList.add('hidden');
        document.getElementById('tab-login').className = "flex-1 pb-3 text-center border-b-2 border-blue-900 text-blue-950 font-bold transition";
        document.getElementById('tab-cadastro').className = "flex-1 pb-3 text-center border-b-2 border-transparent text-gray-400 font-bold transition";
      } else {
        document.getElementById('form-cadastro').classList.remove('hidden');
        document.getElementById('form-login').classList.add('hidden');
        document.getElementById('tab-cadastro').className = "flex-1 pb-3 text-center border-b-2 border-blue-900 text-blue-950 font-bold transition";
        document.getElementById('tab-login').className = "flex-1 pb-3 text-center border-b-2 border-transparent text-gray-400 font-bold transition";
      }
    }

    function realizarCadastro() {
      const nome = document.getElementById('cad-nome').value.trim();
      const email = document.getElementById('cad-email').value.trim();
      const senha = document.getElementById('cad-senha').value.trim();
      const cargo = document.getElementById('cad-cargo').value;

      if (!nome || !email || !senha) {
        alert("Preencha todos os campos do cadastro!");
        return;
      }

      const existe = usuariosCadastrados.find(u => u.email === email);
      if (existe) {
        alert("Este e-mail já está cadastrado!");
        return;
      }

      const iniciais = nome.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
      const novoUsuario = { nome, email, senha, cargo, pontos: 50, iniciais };
      
      usuariosCadastrados.push(novoUsuario);
      rankingBancoDeDados.push({ id: rankingBancoDeDados.length + 1, nome, iniciais, cargo, pontos: 50 });

      usuarioLogado = novoUsuario;
      iniciarSessaoApp();
      exhibirToast("Cadastro realizado com sucesso! Bem-vindo!");
    }

    function realizarLogin() {
      const email = document.getElementById('login-email').value.trim();
      const senha = document.getElementById('login-senha').value.trim();

      const usuario = usuariosCadastrados.find(u => u.email === email && u.senha === senha);
      if (!usuario) {
        alert("E-mail ou senha incorretos!");
        return;
      }

      usuarioLogado = usuario;
      iniciarSessaoApp();
      exhibirToast(`Bem-vindo de volta, ${usuario.nome}!`);
    }

    function iniciarSessaoApp() {
      document.getElementById('sec-auth').classList.add('hidden');
      document.getElementById('sidebar').classList.remove('hidden');
      document.getElementById('main-content').classList.remove('hidden');

      // Atualizar dados na interface
      document.getElementById('perfil-nome').innerText = usuarioLogado.nome;
      document.getElementById('config-nome').value = usuarioLogado.nome;
      document.getElementById('config-email').value = usuarioLogado.email;
      document.getElementById('perfil-funcao').innerText = `${usuarioLogado.cargo} • Clube Kemuel`;
      document.getElementById('user-role-badge').innerText = usuarioLogado.cargo;
      document.getElementById('perfil-iniciais').innerText = usuarioLogado.iniciais;
      document.getElementById('dash-saudacao').innerText = `Bom dia, ${usuarioLogado.nome.split(' ')[0]}! 👋`;

      // Gerenciar visibilidade do painel Admin
      const adminGrupo = document.getElementById('menu-admin-grupo');
      if (usuarioLogado.cargo === 'Administrador' || usuarioLogado.cargo === 'Líder de Jovens') {
        adminGrupo.classList.remove('hidden');
      } else {
        adminGrupo.classList.add('hidden');
      }

      renderizarCalendario();
      renderizarProximosEventos();
      renderizarEventosDoDia();
      renderizarRanking();
      renderizarDesafios();
      renderizarEvangelismo();
      renderizarNotificacoes();
      renderizarPainelAdmin();

      navegarPara('dashboard');
    }

    function realizarLogout() {
      usuarioLogado = null;
      document.getElementById('sidebar').classList.add('hidden');
      document.getElementById('main-content').classList.add('hidden');
      document.getElementById('sec-auth').classList.remove('hidden');
      alternarAbaAuth('login');
      exhibirToast("Sessão encerrada com sucesso.");
    }

    function renderizarPainelAdmin() {
      const tabela = document.getElementById('admin-tabela-usuarios');
      const totalEl = document.getElementById('admin-total-usuarios');
      totalEl.innerText = `${usuariosCadastrados.length} usuário${usuariosCadastrados.length !== 1 ? 's' : ''}`;

      let html = '';
      usuariosCadastrados.forEach((u, idx) => {
        html += `
          <tr class="hover:bg-gray-50 transition">
            <td class="p-4 font-bold text-blue-950">${u.nome}</td>
            <td class="p-4 text-gray-600">${u.email}</td>
            <td class="p-4"><span class="px-2 py-1 bg-amber-50 text-amber-800 font-bold rounded-full">${u.cargo}</span></td>
            <td class="p-4 text-right">
              <button onclick="removerUsuarioAdmin(${idx})" class="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-700 font-bold rounded-[16px] transition"><i class="fa-solid fa-trash"></i></button>
            </td>
          </tr>
        `;
      });
      tabela.innerHTML = html;
    }

    function removerUsuarioAdmin(idx) {
      if (usuariosCadastrados[idx].email === usuarioLogado.email) {
        alert("Você não pode excluir sua própria conta enquanto está logado!");
        return;
      }
      if (confirm("Deseja realmente remover este usuário?")) {
        usuariosCadastrados.splice(idx, 1);
        renderizarPainelAdmin();
        exhibirToast("Usuário removido com sucesso.");
      }
    }

    function navegarPara(tela) {
      const telas = ['dashboard', 'perfil', 'comunhao', 'calendario', 'ranking', 'desafios', 'evangelismo', 'notificacoes', 'configuracoes', 'admin'];
      telas.forEach(t => {
        const el = document.getElementById(`sec-${t}`);
        if(el) el.classList.add('hidden');
      });

      const alvo = document.getElementById(`sec-${tela}`);
      if(alvo) alvo.classList.remove('hidden');
      
      document.querySelectorAll('nav button').forEach(b => b.classList.remove('sidebar-active'));
      const activeBtn = document.getElementById(`nav-${tela}`);
      if(activeBtn) activeBtn.classList.add('sidebar-active');

      if (tela === 'ranking') renderizarRanking();
      if (tela === 'desafios') renderizarDesafios();
      if (tela === 'evangelismo') renderizarEvangelismo();
      if (tela === 'notificacoes') renderizarNotificacoes();
      if (tela === 'admin') renderizarPainelAdmin();
    }

    // FUNÇÕES DO CALENDÁRIO
    function renderizarCalendario() {
      const ano = dataAtualCalendario.getFullYear();
      const mes = dataAtualCalendario.getMonth();
      const mesesNomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
      document.getElementById('calendar-month-year').innerText = `${mesesNomes[mes]} ${ano}`;

      const primeiroDiaSemana = new Date(ano, mes, 1).getDay();
      const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate();
      const grid = document.getElementById('calendar-grid');
      grid.innerHTML = '';

      for (let i = 0; i < primeiroDiaSemana; i++) {
        const vazio = document.createElement('div');
        vazio.className = "h-10 md:h-12 rounded-[16px] bg-transparent";
        grid.appendChild(vazio);
      }

      const hojeStr = new Date().toISOString().split('T')[0];

      for (let dia = 1; dia <= ultimoDiaMes; dia++) {
        const mesStr = String(mes + 1).padStart(2, '0');
        const diaStr = String(dia).padStart(2, '0');
        const dataCompleta = `${ano}-${mesStr}-${diaStr}`;
        const temEvento = eventosBancoDeDados.some(e => e.data === dataCompleta);
        const ehHoje = (dataCompleta === hojeStr);
        const ehSelecionado = (dataCompleta === diaSelecionadoCalendario);

        const btnDia = document.createElement('button');
        let classes = "h-10 md:h-12 rounded-[16px] flex flex-col items-center justify-center text-xs font-bold transition relative card-hover ";
        if (ehSelecionado) classes += "bg-blue-900 text-white shadow-lg ring-2 ring-blue-950/20 ";
        else if (ehHoje) classes += "bg-blue-50 text-blue-900 border border-blue-200 ";
        else classes += "bg-gray-50 text-gray-700 hover:bg-gray-100 ";

        btnDia.className = classes;
        btnDia.onclick = () => selecionarDiaCalendario(dataCompleta);

        let html = `<span>${dia}</span>`;
        if (temEvento) html += `<span class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1"></span>`;
        btnDia.innerHTML = html;
        grid.appendChild(btnDia);
      }
    }

    function mudarMesCalendario(direcao) {
      dataAtualCalendario.setMonth(dataAtualCalendario.getMonth() + direcao);
      renderizarCalendario();
    }

    function selecionarDiaCalendario(dataStr) {
      diaSelecionadoCalendario = dataStr;
      renderizarCalendario();
      renderizarEventosDoDia();
    }

    function selecionarFiltroCategoria(categoria) {
      filtroCategoriaAtivo = categoria;
      const botoes = ['todos', 'Espiritual', 'Evangelismo', 'Social', 'Desafios', 'Treinamentos', 'Solidário'];
      botoes.forEach(b => {
        const btnEl = document.getElementById(`btn-filtro-${b}`);
        if(btnEl) {
          if(b === categoria) btnEl.className = "px-4 py-2 rounded-[16px] text-xs font-bold bg-blue-900 text-white shadow transition shrink-0";
          else btnEl.className = "px-4 py-2 rounded-[16px] text-xs font-bold bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 transition shrink-0";
        }
      });
      renderizarEventosDoDia();
      renderizarProximosEventos();
    }

    function filtrarEventosCalendario() {
      renderizarEventosDoDia();
      renderizarProximosEventos();
    }

    function obterCorCategoria(cat) {
      switch(cat) {
        case 'Espiritual': return 'bg-amber-50 text-amber-700 border-amber-200';
        case 'Evangelismo': return 'bg-rose-50 text-rose-700 border-rose-200';
        case 'Social': return 'bg-blue-50 text-blue-700 border-blue-200';
        case 'Desafios': return 'bg-purple-50 text-purple-700 border-purple-200';
        case 'Treinamentos': return 'bg-cyan-50 text-cyan-700 border-cyan-200';
        case 'Solidário': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        default: return 'bg-gray-50 text-gray-700 border-gray-200';
      }
    }

    function renderizarEventosDoDia() {
      const container = document.getElementById('container-eventos-dia');
      const tituloEl = document.getElementById('titulo-eventos-dia');
      const badgeEl = document.getElementById('badge-total-eventos-dia');
      const termoBusca = document.getElementById('input-busca-evento').value.toLowerCase();

      tituloEl.innerHTML = `<i class="fa-solid fa-calendar-day text-blue-900"></i> Eventos para ${formatarDataLegivel(diaSelecionadoCalendario)}`;
      let filtrados = eventosBancoDeDados.filter(e => e.data === diaSelecionadoCalendario);

      if (filtroCategoriaAtivo !== 'todos') filtrados = filtrados.filter(e => e.categoria === filtroCategoriaAtivo);
      if (termoBusca) filtrados = filtrados.filter(e => e.nome.toLowerCase().includes(termoBusca) || e.descricao.toLowerCase().includes(termoBusca));

      badgeEl.innerText = `${filtrados.length} evento${filtrados.length !== 1 ? 's' : ''}`;

      if (filtrados.length === 0) {
        container.innerHTML = `<div class="col-span-full bg-white border border-gray-100 p-10 rounded-[16px] text-center space-y-3 shadow-sm"><p class="text-sm font-bold text-gray-800">Nenhum evento encontrado.</p></div>`;
        return;
      }

      let html = '';
      filtrados.forEach(e => {
        const corCat = obterCorCategoria(e.categoria);
        html += `
          <div class="bg-white border border-gray-100 p-6 rounded-[16px] shadow-md flex flex-col justify-between card-hover space-y-4">
            <div class="space-y-3">
              <div class="flex justify-between items-start gap-2">
                <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-[16px] border ${corCat}">${e.categoria}</span>
                ${e.pontos ? `<span class="text-[10px] bg-amber-50 text-amber-700 font-extrabold px-2.5 py-1 rounded-[16px] border border-amber-200">+${e.pontos} pts</span>` : ''}
              </div>
              <div><h4 class="text-base font-extrabold text-blue-950">${e.nome}</h4><p class="text-xs text-gray-500 mt-1">${e.descricao}</p></div>
            </div>
            <div class="pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-600 font-medium">
              <div class="flex items-center gap-2"><i class="fa-regular fa-clock text-blue-900"></i> <span>${e.horario}</span></div>
              <div class="flex items-center gap-2"><i class="fa-solid fa-location-dot text-rose-500"></i> <span>${e.local}</span></div>
            </div>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    function renderizarProximosEventos() {
      const container = document.getElementById('proximos-eventos-lista');
      let ordenados = [...eventosBancoDeDados].sort((a, b) => new Date(a.data) - new Date(b.data));
      if (filtroCategoriaAtivo !== 'todos') ordenados = ordenados.filter(e => e.categoria === filtroCategoriaAtivo);

      if (ordenados.length === 0) {
        container.innerHTML = `<p class="text-xs text-gray-400 text-center py-4">Nenhum evento próximo.</p>`;
        return;
      }

      let html = '';
      ordenados.forEach(e => {
        html += `
          <div onclick="selecionarDiaCalendario('${e.data}')" class="bg-gray-50 border border-gray-100 p-3.5 rounded-[16px] hover:bg-gray-100 transition cursor-pointer flex items-center justify-between gap-3">
            <div class="space-y-0.5"><span class="text-[10px] text-blue-900 font-bold">${formatarDataCurta(e.data)}</span><h5 class="text-xs font-bold text-blue-950">${e.nome}</h5></div>
            <span class="text-[10px] bg-blue-50 text-blue-900 font-bold px-2 py-1 rounded-[16px] shrink-0">${e.horario}</span>
          </div>
        `;
      });
      container.innerHTML = html;
    }

    function formatarDataLegivel(dataStr) {
      const [ano, mes, dia] = dataStr.split('-');
      const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
      return `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
    }

    function formatarDataCurta(dataStr) {
      const [ano, mes, dia] = dataStr.split('-');
      const mesesAbbr = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
      return `${dia} ${mesesAbbr[parseInt(mes) - 1]}`;
    }

    function abrirModalNovoEvento() {
      document.getElementById('modal-novo-evento').classList.remove('hidden');
      document.getElementById('admin-evento-nome').value = '';
      document.getElementById('admin-evento-data').value = new Date().toISOString().split('T')[0];
      document.getElementById('admin-evento-horario').value = '19:00';
      document.getElementById('admin-evento-local').value = '';
      document.getElementById('admin-evento-descricao').value = '';
    }

    function fecharModalNovoEvento() { document.getElementById('modal-novo-evento').classList.add('hidden'); }

    function salvarNovoEventoAdmin() {
      const nome = document.getElementById('admin-evento-nome').value.trim();
      const data = document.getElementById('admin-evento-data').value;
      const horario = document.getElementById('admin-evento-horario').value;
      const local = document.getElementById('admin-evento-local').value.trim();
      const categoria = document.getElementById('admin-evento-categoria').value;
      const pontos = parseInt(document.getElementById('admin-evento-pontos').value) || 0;
      const descricao = document.getElementById('admin-evento-descricao').value.trim();

      if (!nome || !data || !horario || !local) {
        alert("Preencha todos os campos obrigatórios do evento!");
        return;
      }

      eventosBancoDeDados.push({ id: eventosBancoDeDados.length + 1, nome, data, horario, local, categoria, descricao, pontos });
      fecharModalNovoEvento();
      diaSelecionadoCalendario = data;
      renderizarCalendario();
      renderizarProximosEventos();
      renderizarEventosDoDia();
      exhibirToast("Novo evento cadastrado com sucesso!");
    }

    function inicializarSeletorLivrosBiblia() {
      const selectLivro = document.getElementById('biblia-livro');
      if(!selectLivro) return;
      selectLivro.innerHTML = '';
      listaLivrosBiblia.forEach((livro, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.innerText = livro.nome;
        selectLivro.appendChild(opt);
      });
      atualizarCapitulosBiblia();
    }

    function atualizarCapitulosBiblia() {
      const selectLivro = document.getElementById('biblia-livro');
      const selectCap = document.getElementById('biblia-capitulo');
      if(!selectLivro || !selectCap) return;
      const livroObj = listaLivrosBiblia[selectLivro.value];
      selectCap.innerHTML = '';
      for (let i = 1; i <= livroObj.caps; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.innerText = `Cap. ${i}`;
        selectCap.appendChild(opt);
      }
    }

    async function carregarTextoBiblia() {
      const selectLivro = document.getElementById('biblia-livro');
      const selectCap = document.getElementById('biblia-capitulo');
      const selectVersao = document.getElementById('select-versao-biblia');
      if(!selectLivro || !selectCap) return;
      const livroObj = listaLivrosBiblia[selectLivro.value];
      const capitulo = selectCap.value || 1;
      const versao = selectVersao ? selectVersao.value : 'almeida';
      const tituloEl = document.getElementById('biblia-titulo-leitura');
      const conteudoEl = document.getElementById('biblia-conteudo-texto');

      tituloEl.innerText = `${livroObj.nome} ${capitulo}`;
      conteudoEl.innerHTML = `<p class="text-center text-gray-400">Carregando...</p>`;

      try {
        const res = await fetch(`https://bible-api.com/${encodeURIComponent(`${livroObj.nome} ${capitulo}`)}?translation=${versao}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        let html = '';
        data.verses.forEach(v => {
          html += `<p class="hover:bg-blue-50 p-1 rounded"><strong class="text-blue-950 font-bold mr-1">${v.verse}</strong> ${v.text}</p>`;
        });
        conteudoEl.innerHTML = html;
      } catch (e) {
        conteudoEl.innerHTML = `<p class="text-red-500 text-xs">Erro ao carregar o texto bíblico online. #biblia</p>`;
      }
    }

    function mudarCapituloBiblia(direcao) {
      const selectCap = document.getElementById('biblia-capitulo');
      const novoIdx = selectCap.selectedIndex + direcao;
      if (novoIdx >= 0 && novoIdx < selectCap.options.length) {
        selectCap.selectedIndex = novoIdx;
        carregarTextoBiblia();
      }
    }

    function inicializarSeletorAnoBiblico() {
      const selectLivro = document.getElementById('ano-biblico-livro');
      if(!selectLivro) return;
      selectLivro.innerHTML = '';
      listaNovoTestamento.forEach((livro, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.innerText = livro.nome;
        selectLivro.appendChild(opt);
      });
      atualizarCapitulosAnoBiblico();
    }

    function atualizarCapitulosAnoBiblico() {
      const selectLivro = document.getElementById('ano-biblico-livro');
      const selectCap = document.getElementById('ano-biblico-capitulo');
      if(!selectLivro || !selectCap) return;
      const livroObj = listaNovoTestamento[selectLivro.value];
      selectCap.innerHTML = '';
      for (let i = 1; i <= livroObj.caps; i++) {
        const opt = document.createElement('option');
        opt.value = i;
        opt.innerText = `Capítulo ${i}`;
        selectCap.appendChild(opt);
      }
    }

    async function abrirModalLicao() {
      document.getElementById('modal-licao').classList.remove('hidden');
      const conteudoEl = document.getElementById('licao-modal-conteudo');
      try {
        const res = await fetch(`https://sabbath-school.adventech.io/api/v2/pt/quarterlies/2026-03-cq/lessons/06/days/01/read/index.json`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        document.getElementById('licao-modal-titulo').innerHTML = `<i class="fa-solid fa-book-open-reader text-cyan-400"></i> ${data.title}`;
        document.getElementById('licao-modal-subtitulo').innerText = `${data.date} #licaoescolasabatina`;
        conteudoEl.innerHTML = data.content;
      } catch (e) {
        conteudoEl.innerHTML = `<p class="text-red-500">Erro ao carregar a lição. #licaoescolasabatina</p>`;
      }
    }

    async function abrirModalPG() {
      document.getElementById('modal-pg').classList.remove('hidden');
      const conteudoEl = document.getElementById('pg-modal-conteudo');
      try {
        const res = await fetch(`https://sabbath-school.adventech.io/api/v2/pt/quarterlies/2026-03-cq/lessons/06/days/07/read/index.json`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        document.getElementById('pg-modal-titulo').innerHTML = `<i class="fa-solid fa-people-group text-indigo-300"></i> ${data.title}`;
        document.getElementById('pg-modal-subtitulo').innerText = `${data.date} #pgmystyle`;
        conteudoEl.innerHTML = data.content;
      } catch (e) {
        conteudoEl.innerHTML = `<p class="text-red-500">Erro ao carregar o conteúdo do PG. #pgmystyle</p>`;
      }
    }

    function fecharModalLicao() { document.getElementById('modal-licao').classList.add('hidden'); }
    function fecharModalPG() { document.getElementById('modal-pg').classList.add('hidden'); }
    function abrirModalBiblia() { document.getElementById('modal-biblia').classList.remove('hidden'); }
    function fecharModalBiblia() { document.getElementById('modal-biblia').classList.add('hidden'); }
    function abrirModalDevocional() { document.getElementById('modal-devocional').classList.remove('hidden'); }
    function fecharModalDevocional() { document.getElementById('modal-devocional').classList.add('hidden'); }

    function salvarDevocional() {
      const checkbox = document.getElementById('check-concluido-leitura');
      if(!checkbox.checked) {
        alert("Marque a caixa confirmando que concluiu a leitura!");
        return;
      }
      fecharModalDevocional();
      exhibirToast("Ano Bíblico registrado com sucesso! +100 pontos. #anobiblico");
      document.getElementById('texto-reflexao').value = '';
      checkbox.checked = false;
    }

    function confirmarEstudoLicaoAPI() { fecharModalLicao(); exhibirToast("Estudo registrado com sucesso! +50 pts. #licaoescolasabatina"); }
    function confirmarEstudoPG() { fecharModalPG(); exhibirToast("Estudo do PG registrado! +70 pts. #pgmystyle"); }

    function renderizarRanking() {
      const ordenados = [...rankingBancoDeDados].sort((a, b) => b.pontos - a.pontos);
      const maiorPontuacao = ordenados[0] ? ordenados[0].pontos : 1;
      const minhaPosicao = usuarioLogado ? ordenados.findIndex(p => p.nome === usuarioLogado.nome) + 1 : 0;
      
      const badgePosicao = document.getElementById('ranking-minha-posicao');
      if (badgePosicao) badgePosicao.innerText = minhaPosicao > 0 ? `Sua posição: ${minhaPosicao}º lugar` : 'Sua posição: --';

      const podioEl = document.getElementById('ranking-podio');
      const top3 = ordenados.slice(0, 3);
      const ordemVisual = [top3[1], top3[0], top3[2]];
      const alturaPodio = ['h-28', 'h-36', 'h-20'];
      const corPodio = ['bg-gray-300', 'bg-amber-400', 'bg-orange-300'];
      const medalha = ['🥈', '🥇', '🥉'];

      let podioHtml = '';
      ordemVisual.forEach((pessoa, idx) => {
        if (!pessoa) { podioHtml += '<div></div>'; return; }
        podioHtml += `
          <div class="flex flex-col items-center gap-2">
            <span class="text-3xl">${medalha[idx]}</span>
            <div class="w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-950 text-white flex items-center justify-center font-black text-lg shadow-lg border-4 border-white ring-2 ring-blue-100">${pessoa.iniciais}</div>
            <p class="text-xs md:text-sm font-extrabold text-blue-950 text-center leading-tight">${pessoa.nome}</p>
            <p class="text-[10px] text-amber-600 font-bold">${pessoa.pontos} pts</p>
            <div class="w-full ${corPodio[idx]} ${alturaPodio[idx]} rounded-t-[16px] shadow-inner flex items-center justify-center text-blue-950 font-black text-base">
              ${idx === 0 ? '2º' : idx === 1 ? '1º' : '3º'}
            </div>
          </div>
        `;
      });
      podioEl.innerHTML = podioHtml;

      const listaEl = document.getElementById('ranking-lista');
      let listaHtml = '';
      ordenados.forEach((pessoa, idx) => {
        const larguraBarra = Math.max(10, Math.round((pessoa.pontos / maiorPontuacao) * 100));
        listaHtml += `
          <div class="p-4 flex items-center justify-between gap-4 hover:bg-gray-50 transition">
            <div class="flex items-center gap-4">
              <span class="w-6 text-center font-extrabold text-xs text-gray-400">${idx + 1}º</span>
              <div class="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-black text-xs shrink-0">${pessoa.iniciais}</div>
              <div class="space-y-0.5">
                <h4 class="text-xs font-extrabold text-blue-950">${pessoa.nome}</h4>
                <p class="text-[10px] text-gray-400 font-bold">${pessoa.cargo}</p>
              </div>
            </div>
            <div class="flex items-center gap-3 w-1/3 max-w-[200px]">
              <div class="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div class="bg-blue-900 h-full rounded-full" style="width: ${larguraBarra}%"></div>
              </div>
              <span class="text-xs font-black text-blue-950 shrink-0">${pessoa.pontos} pts</span>
            </div>
          </div>
        `;
      });
      listaEl.innerHTML = listaHtml;
    }

    function renderizarDesafios() {
      const grid = document.getElementById('desafios-grid');
      const resumoEl = document.getElementById('desafios-resumo');
      let concluidos = desafiosBancoDeDados.filter(d => d.progresso >= d.meta).length;
      resumoEl.innerText = `${concluidos} de ${desafiosBancoDeDados.length} concluídos`;

      let html = '';
      desafiosBancoDeDados.forEach(d => {
        const percentual = Math.min(100, Math.round((d.progresso / d.meta) * 100));
        const concluido = d.progresso >= d.meta;
        html += `
          <div class="bg-white border border-gray-100 p-6 rounded-[16px] shadow-md flex flex-col justify-between card-hover space-y-4">
            <div class="space-y-3">
              <div class="flex justify-between items-start gap-2">
                <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-[16px] bg-purple-50 text-purple-700 border border-purple-200">${d.categoria}</span>
                <span class="text-[10px] bg-amber-50 text-amber-700 font-extrabold px-2.5 py-1 rounded-[16px] border border-amber-200">+${d.pontos} pts</span>
              </div>
              <div><h4 class="text-base font-extrabold text-blue-950">${d.titulo}</h4><p class="text-xs text-gray-500 mt-1">${d.descricao}</p></div>
            </div>
            <div class="space-y-3 pt-2">
              <div class="flex justify-between items-center text-xs font-bold">
                <span class="text-gray-400">Progresso</span>
                <span class="${concluido ? 'text-emerald-600 font-black' : 'text-blue-950'}">${d.progresso} / ${d.meta} (${percentual}%)</span>
              </div>
              <div class="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                <div class="${concluido ? 'bg-emerald-500' : 'bg-blue-900'} h-full rounded-full transition-all duration-500" style="width: ${percentual}%"></div>
              </div>
              <button onclick="avancarDesafio(${d.id})" class="w-full py-2.5 ${concluido ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-blue-900 hover:bg-blue-950'} text-white font-bold text-xs rounded-[16px] transition shadow">
                ${concluido ? '<i class="fa-solid fa-check"></i> Desafio Concluído' : 'Registrar Progresso'}
              </button>
            </div>
          </div>
        `;
      });
      grid.innerHTML = html;
    }

    function avancarDesafio(id) {
      const d = desafiosBancoDeDados.find(item => item.id === id);
      if(d) {
        if(d.progresso < d.meta) {
          d.progresso++;
          renderizarDesafios();
          exhibirToast("Progresso atualizado com sucesso! #desafios");
          if(d.progresso >= d.meta) {
            if(typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            exhibirToast(`Parabéns! Desafio concluído! +${d.pontos} pontos!`);
          }
        } else {
          exhibirToast("Este desafio já foi concluído!");
        }
      }
    }

    function renderizarEvangelismo() {
      const listaEl = document.getElementById('evangelismo-lista');
      document.getElementById('evangelismo-total-contatos').innerText = evangelismoBancoDeDados.length;
      document.getElementById('evangelismo-total-materiais').innerText = evangelismoBancoDeDados.filter(e => e.tipo === 'Distribuição').length;
      document.getElementById('evangelismo-total-oracao').innerText = evangelismoBancoDeDados.filter(e => e.tipo === 'Pedido de Oração').length;

      if (evangelismoBancoDeDados.length === 0) {
        listaEl.innerHTML = `<div class="col-span-full bg-white border border-gray-100 p-10 rounded-[16px] text-center"><p class="text-xs font-bold text-gray-500">Nenhum contato cadastrado.</p></div>`;
        return;
      }

      let html = '';
      evangelismoBancoDeDados.forEach((c, idx) => {
        html += `
          <div class="bg-white border border-gray-100 p-6 rounded-[16px] shadow-md space-y-4 card-hover">
            <div class="flex justify-between items-start">
              <span class="text-[10px] font-extrabold px-2.5 py-1 rounded-[16px] bg-rose-50 text-rose-700 border border-rose-200">${c.tipo}</span>
              <button onclick="removerContato(${idx})" class="text-gray-400 hover:text-red-600 text-xs transition"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div><h4 class="text-base font-extrabold text-blue-950">${c.nome}</h4><p class="text-xs text-gray-500 mt-1">${c.observacao || 'Sem observações.'}</p></div>
            <div class="pt-3 border-t border-gray-100 flex justify-between items-center text-[10px] text-gray-400 font-bold">
              <span>Data: ${formatarDataCurta(c.data)}</span>
              <span class="text-emerald-600">${c.status}</span>
            </div>
          </div>
        `;
      });
      listaEl.innerHTML = html;
    }

    function abrirModalNovoContato() {
      document.getElementById('modal-novo-contato').classList.remove('hidden');
      document.getElementById('evang-contato-nome').value = '';
      document.getElementById('evang-contato-data').value = new Date().toISOString().split('T')[0];
      document.getElementById('evang-contato-obs').value = '';
    }

    function fecharModalNovoContato() { document.getElementById('modal-novo-contato').classList.add('hidden'); }

    function salvarNovoContato() {
      const nome = document.getElementById('evang-contato-nome').value.trim();
      const data = document.getElementById('evang-contato-data').value;
      const tipo = document.getElementById('evang-contato-tipo').value;
      const observacao = document.getElementById('evang-contato-obs').value.trim();

      if(!nome || !data) {
        alert("Preencha o nome e a data!");
        return;
      }

      evangelismoBancoDeDados.push({ id: evangelismoBancoDeDados.length + 1, nome, data, tipo, observacao, status: "Em acompanhamento" });
      fecharModalNovoContato();
      renderizarEvangelismo();
      exhibirToast("Contato de evangelismo salvo com sucesso! #evangelismo");
    }

    function removerContato(idx) {
      if(confirm("Deseja remover este contato?")) {
        evangelismoBancoDeDados.splice(idx, 1);
        renderizarEvangelismo();
        exhibirToast("Contato removido.");
      }
    }

    function renderizarNotificacoes() {
      const listaEl = document.getElementById('notificacoes-lista');
      const naoLidas = notificacoesBancoDeDados.filter(n => !n.lida).length;
      document.getElementById('notificacoes-subtitulo').innerText = naoLidas > 0 ? `Você tem ${naolidas = naoLidas} notificação(ões) não lida(s).` : 'Todas as notificações foram lidas.';

      if (notificacoesBancoDeDados.length === 0) {
        listaEl.innerHTML = `<div class="bg-white border border-gray-100 p-8 rounded-[16px] text-center"><p class="text-xs text-gray-400">Nenhuma notificação no momento.</p></div>`;
        return;
      }

      let html = '';
      notificacoesBancoDeDados.forEach(n => {
        html += `
          <div class="bg-white border ${n.lida ? 'border-gray-100 opacity-70' : 'border-blue-200 bg-blue-50/20'} p-4 rounded-[16px] shadow-sm flex items-center justify-between gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full ${n.lida ? 'bg-gray-200 text-gray-600' : 'bg-blue-900 text-white'} flex items-center justify-center text-xs shrink-0"><i class="fa-solid fa-bell"></i></div>
              <div class="space-y-0.5"><h4 class="text-xs font-bold text-blue-950">${n.titulo}</h4><p class="text-xs text-gray-600">${n.mensagem}</p></div>
            </div>
            ${!n.lida ? `<button onclick="marcarNotificacaoLida(${n.id})" class="text-[10px] bg-blue-900 text-white px-3 py-1.5 rounded-[16px] font-bold shrink-0">Marcar lida</button>` : '<span class="text-[10px] text-gray-400 font-bold shrink-0">Lida</span>'}
          </div>
        `;
      });
      listaEl.innerHTML = html;
    }

    function marcarNotificacaoLida(id) {
      const n = notificacoesBancoDeDados.find(item => item.id === id);
      if(n) { n.lida = true; renderizarNotificacoes(); }
    }

    function marcarTodasNotificacoesLidas() {
      notificacoesBancoDeDados.forEach(n => n.lida = true);
      renderizarNotificacoes();
      exhibirToast("Todas as notificações foram marcadas como lidas.");
    }

    function salvarDadosPessoais() {
      const nome = document.getElementById('config-nome').value.trim();
      const email = document.getElementById('config-email').value.trim();
      if(!nome || !email) {
        alert("Preencha todos os campos!");
        return;
      }
      usuarioLogado.nome = nome;
      usuarioLogado.email = email;
      document.getElementById('perfil-nome').innerText = nome;
      document.getElementById('dash-saudacao').innerText = `Bom dia, ${nome.split(' ')[0]}! 👋`;
      exhibirToast("Dados pessoais salvos com sucesso!");
    }

    function alterarSenha() {
      const atual = document.getElementById('config-senha-atual').value;
      const nova = document.getElementById('config-senha-nova').value;
      const confirmar = document.getElementById('config-senha-confirmar').value;

      if(!atual || !nova || !confirmar) {
        alert("Preencha todos os campos de senha!");
        return;
      }
      if(atual !== usuarioLogado.senha) {
        alert("Senha atual incorreta!");
        return;
      }
      if(nova !== confirmar) {
        alert("A nova senha e a confirmação não coincidem!");
        return;
      }

      usuarioLogado.senha = nova;
      document.getElementById('config-senha-atual').value = '';
      document.getElementById('config-senha-nova').value = '';
      document.getElementById('config-senha-confirmar').value = '';
      exhibirToast("Senha alterada com sucesso!");
    }

    // SUPORTE A FOTO DE PERFIL
    function toggleAvatarMenu(e) {
      e.stopPropagation();
      const dropdown = document.getElementById('avatar-dropdown');
      dropdown.classList.toggle('hidden');
    }

    document.addEventListener('click', () => {
      const dropdown = document.getElementById('avatar-dropdown');
      if (dropdown && !dropdown.classList.contains('hidden')) dropdown.classList.add('hidden');
    });

    function abrirSeletorFoto() {
      document.getElementById('input-foto-upload').click();
    }

    function processarArquivoSelecionado(input) {
      if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const imgUrl = e.target.result;
          const iniciaisEl = document.getElementById('perfil-iniciais');
          const avatarImg = document.getElementById('perfil-avatar');
          
          if(iniciaisEl) iniciaisEl.classList.add('hidden');
          if(avatarImg) {
            avatarImg.src = imgUrl;
            avatarImg.classList.remove('hidden');
          }
          exhibirToast("Foto de perfil atualizada com sucesso!");
        };
        reader.readAsDataURL(input.files[0]);
      }
    }

    function visualizarFoto() {
      const avatarImg = document.getElementById('perfil-avatar');
      if (avatarImg && !avatarImg.classList.contains('hidden')) {
        const w = window.open("");
        w.document.write(`<img src="${avatarImg.src}" style="max-width:100%; height:auto; display:block; margin:auto;">`);
      } else {
        alert("Nenhuma foto de perfil cadastrada.");
      }
    }

    function confirmarRemoverFoto() {
      if(confirm("Deseja remover sua foto de perfil?")) {
        const iniciaisEl = document.getElementById('perfil-iniciais');
        const avatarImg = document.getElementById('perfil-avatar');
        if(iniciaisEl) iniciaisEl.classList.remove('hidden');
        if(avatarImg) {
          avatarImg.src = '';
          avatarImg.classList.add('hidden');
        }
        document.getElementById('input-foto-upload').value = '';
        exhibirToast("Foto de perfil removida.");
      }
    }

    function exhibirToast(msg) {
      const toast = document.getElementById('toast-notificacao');
      const spanMsg = document.getElementById('toast-mensagem');
      spanMsg.innerText = msg;
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }
  
