import React, { useState, useEffect, useRef } from "react";
import { Head } from "@inertiajs/react";

// ==========================================
// ÍCONES DE ENGENHARIA & CONTROLE GOVERNAMENTAL
// ==========================================
type IconName =
    | "shield"
    | "layers"
    | "server"
    | "code"
    | "database"
    | "arrow"
    | "file"
    | "check"
    | "terminal"
    | "lock"
    | "search"
    | "activity"
    | "external"
    | "box"
    | "users"
    | "clock"
    | "calendar"
    | "download"
    | "video"
    | "alertCircle"
    | "diagram";

function Icon({ name, size = 16, className = "" }: { name: IconName; size?: number; className?: string }) {
    const icons: Record<IconName, React.ReactNode> = {
        shield: (
            <>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
            </>
        ),
        layers: (
            <>
                <path d="m12 2 9 4.9-9 4.9-9-4.9Z" />
                <path d="m3 12 9 4.9 9-4.9" />
                <path d="m3 17 9 4.9 9-4.9" />
            </>
        ),
        server: (
            <>
                <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
                <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
                <line x1="6" x2="6.01" y1="6" y2="6" />
                <line x1="6" x2="6.01" y1="18" y2="18" />
            </>
        ),
        code: (
            <>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
            </>
        ),
        database: (
            <>
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
            </>
        ),
        arrow: (
            <>
                <line x1="5" x2="19" y1="12" y2="12" />
                <polyline points="12 5 19 12 12 19" />
            </>
        ),
        file: (
            <>
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                <path d="M10 13h4" />
                <path d="M10 17h4" />
            </>
        ),
        check: <polyline points="20 6 9 17 4 12" />,
        terminal: (
            <>
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" x2="20" y1="19" y2="19" />
            </>
        ),
        lock: (
            <>
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </>
        ),
        search: (
            <>
                <circle cx="11" cy="11" r="8" />
                <line x1="21" x2="16.65" y1="21" y2="16.65" />
            </>
        ),
        activity: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
        external: (
            <>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" x2="21" y1="14" y2="3" />
            </>
        ),
        box: (
            <>
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
            </>
        ),
        users: (
            <>
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </>
        ),
        clock: (
            <>
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </>
        ),
        calendar: (
            <>
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
            </>
        ),
        download: (
            <>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
            </>
        ),
        video: (
            <>
                <rect width="14" height="12" x="2" y="6" rx="2" />
                <polygon points="22 8 16 12 22 16 22 8" />
            </>
        ),
        alertCircle: (
            <>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
            </>
        ),
        diagram: (
            <>
                <rect width="6" height="6" x="3" y="3" rx="1" />
                <rect width="6" height="6" x="15" y="3" rx="1" />
                <rect width="6" height="6" x="9" y="15" rx="1" />
                <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
                <line x1="12" x2="12" y1="13" y2="15" />
            </>
        ),
    };

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {icons[name] || icons.shield}
        </svg>
    );
}

// ==========================================
// ESTRUTURA DOS CASOS DE USO (ITEM 3 DO EDITAL)
// Fonte: UseCase Diagram0.asta / Caso-de-Uso.png
// Atores: Usuário, Administrador, Responsável pelo Estoque,
//         Diretor, Secretário
// ==========================================
interface CaseStudy {
    id: string;
    num: string;
    label: string;
    title: string;
    actors: string;
    subtitle: string;
    regulation: string;
    metrics: { label: string; val: string }[];
    screenType: "auth" | "dashboard" | "patrimonio" | "estoque";
}

const CASE_STUDIES: CaseStudy[] = [
    {
        id: "auth",
        num: "01",
        label: "SEGURANÇA & ACESSO",
        title: "UC01 — Efetuar Login / Logout & Gerenciar Perfil",
        actors: "Ator: Usuário (todos os perfis do sistema)",
        subtitle:
            "Autenticação segura no portal AxisGov via e-mail e senha, com redirecionamento automático conforme perfil RBAC cadastrado (Administrador, Secretário, Diretor, Responsável pelo Estoque). Suporte a edição de nome, telefone e redefinição de senha com confirmação obrigatória.",
        regulation: "Lei 13.709/2018 (LGPD) Art. 46 • Middleware Laravel Auth • Proteção por sessão",
        metrics: [
            { label: "Perfis de Acesso (RBAC)", val: "5 Níveis Distintos" },
            { label: "Sessão Protegida", val: "Middleware auth obrigatório" },
            { label: "Bloqueio de Inativo", val: "Campo ativo = false" },
        ],
        screenType: "auth",
    },
    {
        id: "estoque",
        num: "02",
        label: "GESTÃO DE ESTOQUE",
        title: "UC02 — Gerenciar Produtos & Registrar Movimentações",
        actors: "Ator: Administrador / Responsável pelo Estoque",
        subtitle:
            "Cadastro e manutenção do catálogo de insumos públicos (código único, nome, categoria, valor unitário). Registro transacional de entradas e saídas de estoque com validação de saldo, lock pessimista no banco de dados e geração automática de histórico de movimentações rastreável.",
        regulation: "Nova Lei de Licitações (Lei 14.133/2021) • Soft Deletes para integridade histórica",
        metrics: [
            { label: "Controle de Saldo", val: "DB::transaction() atômico" },
            { label: "Bloqueio de Ruptura", val: "Validação pré-saída" },
            { label: "Rastreabilidade", val: "100% das movimentações" },
        ],
        screenType: "estoque",
    },
    {
        id: "dashboard",
        num: "03",
        label: "GESTÃO DE PEDIDOS",
        title: "UC03 — Aprovar / Rejeitar Pedidos de Material",
        actors: "Ator: Administrador (aprovação) • Diretor (criação e acompanhamento)",
        subtitle:
            "Fluxo completo de requisição de materiais entre unidades descentralizadas (escolas, setores) e o almoxarifado central. O Diretor cria e acompanha pedidos com status em tempo real; o Administrador analisa e transita o status entre Pendente → Aprovado ou Rejeitado com justificativa formal.",
        regulation: "Princípio da Eficiência (Art. 37 CF/88) • StatusPedido: PENDENTE / APROVADO / REJEITADO",
        metrics: [
            { label: "Estados do Pedido", val: "Pendente → Aprovado / Rejeitado" },
            { label: "Criação pelo Diretor", val: "Produto + Quantidade + Justificativa" },
            { label: "Aprovação pelo Admin", val: "Com log de decisão" },
        ],
        screenType: "dashboard",
    },
    {
        id: "patrimonio",
        num: "04",
        label: "ADMINISTRAÇÃO DO SISTEMA",
        title: "UC04 — Gerenciar Usuários, Secretarias & Categorias",
        actors: "Ator: Administrador do Sistema",
        subtitle:
            "Gestão completa dos cadastros mestres do AxisGov: criação, edição, inativação e exclusão de usuários com atribuição de perfil RBAC; parametrização de Secretarias Municipais (nome, sigla, endereço, vinculação de diretores); e manutenção da taxonomia de categorias de materiais para o catálogo de produtos.",
        regulation: "Controle de acesso por role: ROLE_ADMIN=1 • Soft Deletes em todas as entidades",
        metrics: [
            { label: "Entidades Gerenciadas", val: "Usuário, Secretaria, Categoria" },
            { label: "Atribuição de Papéis", val: "5 Tipos RBAC distintos" },
            { label: "Integridade Referencial", val: "Soft Delete em cascata" },
        ],
        screenType: "patrimonio",
    },
];

// ==========================================
// CRONOGRAMA EM TABELA (EXIGÊNCIA EDITAL UNIFIL)
// Baseado nas migrações reais do AxisGov:
// 2026_04_18, 2026_04_24, 2026_07_04, 2026_08_06
// ==========================================
interface ScheduleRow {
    code: string;
    name: string;
    module: string;
    startDate: string;
    endDate: string;
    status: "Concluído" | "Em Andamento" | "Homologação" | "Planejado";
    responsible: string;
}

const SCHEDULE_DATA: ScheduleRow[] = [
    {
        code: "UC01",
        name: "Efetuar Login / Logout & Gerenciar Perfil e Senha",
        module: "Módulo 01: Autenticação & Segurança (RBAC)",
        startDate: "18/04/2026",
        endDate: "25/04/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC02",
        name: "Gerenciar Categorias de Materiais",
        module: "Módulo 02: Catálogo de Produtos",
        startDate: "24/04/2026",
        endDate: "30/04/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC03",
        name: "Gerenciar Produtos (Cadastro, Edição, Inativação)",
        module: "Módulo 02: Catálogo de Produtos",
        startDate: "24/04/2026",
        endDate: "08/05/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC04",
        name: "Registrar Entrada de Estoque (DB Transaction)",
        module: "Módulo 03: Almoxarifado & Estoque",
        startDate: "24/04/2026",
        endDate: "15/05/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC05",
        name: "Registrar Saída de Estoque (Lock Pessimista)",
        module: "Módulo 03: Almoxarifado & Estoque",
        startDate: "15/05/2026",
        endDate: "30/05/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC06",
        name: "Consultar Histórico de Movimentações",
        module: "Módulo 03: Almoxarifado & Estoque",
        startDate: "30/05/2026",
        endDate: "10/06/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC07",
        name: "Gerenciar Secretarias Municipais",
        module: "Módulo 04: Administração do Sistema",
        startDate: "18/04/2026",
        endDate: "28/04/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC08",
        name: "Gerenciar Usuários & Atribuição de Perfis RBAC",
        module: "Módulo 04: Administração do Sistema",
        startDate: "18/04/2026",
        endDate: "10/05/2026",
        status: "Concluído",
        responsible: "Samir Chehade",
    },
    {
        code: "UC09",
        name: "Criar Pedido de Material (Diretor → Almoxarifado)",
        module: "Módulo 05: Fluxo de Requisições",
        startDate: "05/10/2026",
        endDate: "16/10/2026",
        status: "Planejado",
        responsible: "Samir Chehade",
    },
    {
        code: "UC10",
        name: "Acompanhar / Editar Pedidos Próprios",
        module: "Módulo 05: Fluxo de Requisições",
        startDate: "19/10/2026",
        endDate: "30/10/2026",
        status: "Planejado",
        responsible: "Samir Chehade",
    },
    {
        code: "UC11",
        name: "Aprovar / Rejeitar Pedidos de Material",
        module: "Módulo 05: Fluxo de Requisições",
        startDate: "03/11/2026",
        endDate: "13/11/2026",
        status: "Planejado",
        responsible: "Samir Chehade",
    },
    {
        code: "UC12",
        name: "Soft Deletes em Todas as Entidades",
        module: "Módulo 06: Integridade de Dados",
        startDate: "16/11/2026",
        endDate: "24/11/2026",
        status: "Planejado",
        responsible: "Samir Chehade",
    },
    {
        code: "UC13",
        name: "Visualizar Painel da Secretaria (Dashboard)",
        module: "Módulo 04: Administração do Sistema",
        startDate: "25/11/2026",
        endDate: "30/11/2026",
        status: "Planejado",
        responsible: "Samir Chehade",
    },
];

// ==========================================
// DIAGRAMAS DESENVOLVIDOS (ITEM 4 DO EDITAL)
// Todos os arquivos estão em:
// public/images/axisgov/diagrams/
// ==========================================
interface DiagramItem {
    id: string;
    title: string;
    type: "Classes" | "Sequência" | "Estados" | "DER / Entidade-Relacionamento" | "Casos de Uso" | "Implantação";
    description: string;
    imagePath: string;
    previewCode: string;
}

const DIAGRAMS_DATA: DiagramItem[] = [
    {
        id: "casos-de-uso",
        title: "Diagrama de Casos de Uso",
        type: "Casos de Uso",
        imagePath: "/images/axisgov/diagrams/UseCase Diagram0.png",
        description:
            "Diagrama UML completo com os 4 atores do AxisGov: Usuário (Login/Logout, Gerenciar Perfil), Administrador (8 casos de uso: Produtos, Estoque, Secretarias, Usuários, Pedidos), Diretor (Criar e Acompanhar Pedidos) e Secretário (Painel da Secretaria).",
        previewCode: `Atores: Usuário, Administrador, Diretor, Secretário

Usuário:
  UC01 - Efetuar Login/Logout
  UC02 - Gerenciar Perfil e Senha

Administrador:
  UC03 - Gerenciar Categorias
  UC04 - Gerenciar Produtos
  UC05 - Registrar Entrada de Estoque
  UC06 - Registrar Saída de Estoque
  UC07 - Consultar Histórico de Movimentações
  UC08 - Gerenciar Secretarias
  UC09 - Gerenciar Usuários
  UC10 - Aprovar / Rejeitar Pedidos

Diretor:
  UC11 - Criar Pedido de Material
  UC12 - Acompanhar / Editar Pedidos Próprios

Secretário:
  UC13 - Visualizar Painel da Secretaria`,
    },
    {
        id: "classes",
        title: "Diagrama de Classes (Domínio de Negócio)",
        type: "Classes",
        imagePath: "/images/axisgov/diagrams/Class Diagram0.png",
        description:
            "Estrutura OO completa: entidades User (com RoleEnum: ADMIN=1, SECRETARIO=2, DIRETOR=3, USER=4, RESPONSAVEL_ESTOQUE=5), Secretaria, Categoria, Produto, Movimentacao (com TipoMovimentacao: entrada/saida), Pedido (com StatusPedido: pendente/aprovado/rejeitado).",
        previewCode: `class User {
  +BigInt id
  +String name, email, password, telefone
  +BigInt secretaria_id
  +roleLabel(role: int): String
  +secretaria(): BelongsTo
}
class Produto {
  +String codigo, nome
  +int estoque_atual
  +Decimal valor_unitario
  +boolean ativo
  +movimentacoes(): HasMany
}
class Movimentacao {
  +TipoMovimentacao tipo  // entrada | saida
  +int quantidade
  +Date data_movimentacao
  +String destino, observacoes
}
class Pedido {
  +StatusPedido status  // pendente | aprovado | rejeitado
  +int quantidade
  +String observacao
}`,
    },
    {
        id: "sequencia-produto",
        title: "Diagrama de Sequência: Gerenciar Produto",
        type: "Sequência",
        imagePath: "/images/axisgov/diagrams/Gerenciar Produto - Diagrama Sequencia.png",
        description:
            "Fluxo completo de Cadastrar e Deletar Produto: Responsável Estoque → Interface AxisGov → ProdutoController → Banco de Dados. Cobre cenários de dados válidos (HTTP 200 Sucesso), dados inválidos (HTTP 400 Erro) e exclusão com confirmação de status.",
        previewCode: `sd Gerenciar Produto - Diagrama Sequencia

Cadastrar Produto:
  1: Acessar Menu Produtos()
  1.1: Cadastrar Produto(Código, Produto, Categoria,
       Estoque Inicial, Valor Unitário)
  1.1.1: StoreProduto(Codigo, Produto, Categoria, Estoque, Status)
  2: GetStatus(Status) <- Banco de Dados
  [Dados Válidos]   → 3: Status 200 "Produto criado com sucesso"
  [Dados Inválidos] → 4: Acessar Menu Produtos(Erro)
  5: Retorna resultado(Sucesso ou Erro)

Deletar Produto:
  6: Acessar Menu Produtos()
  6.1: Deletar Produto(Produto)
  6.1.1: Destroy(Produto) → Status
  [Sucesso] → 7: 200 "Produto deletado com sucesso"
  [Erro]    → 8: 400 "Houve um erro ao deletar o produto"
  9: Retorna resultado(Sucesso ou Erro)`,
    },
    {
        id: "sequencia-usuario",
        title: "Diagrama de Sequência: Gerenciar Usuário",
        type: "Sequência",
        imagePath: "/images/axisgov/diagrams/Gerenciar Usuario - Diagrama Sequencia.png",
        description:
            "Fluxo CRUD completo de Usuário realizado pelo Secretário: Adicionar (com verificação de duplicidade), Deletar (com consulta de existência) e Atualizar (com formulário de visualização e persistência). Cobre todos os cenários de erro 409, 400 e sucesso 200.",
        previewCode: `sd Gerenciar Usuario - Diagrama Sequencia
  Atores: Secretario, Interface AxisGov,
          UserController, Banco de Dados

Adicionar Usuário:
  1.1: Cadastrar Novo Usuario(Nome, E-mail, Telefone, Senha)
  [Usuario Já Existente] → 409 "Usuario já está cadastrado"
  [Usuario Cadastrado]   → 200 "Usuario Cadastrado com Sucesso"
  [Erro ao Cadastrar]    → 400 "Erro ao Cadastrar Novo Usuario"

Deletar Usuário:
  6.1: Deletar Usuario(Nome Completo)
  [Usuario Não Existe] → 400 "Usuario Não Encontrado"
  [Deletar Usuario]    → 200 "Usuario foi deletado com sucesso"

Atualizar Usuário:
  11→13: Visualizar → Preencher dados → Salvar()
  13.1: EditarUsuario(dadosUsuario)
  13.1.1: atualizar(dadosUsuario) → Usuário Atualizado`,
    },
    {
        id: "sequencia-entrada",
        title: "Diagrama de Sequência: Registrar Entrada de Estoque",
        type: "Sequência",
        imagePath: "/images/axisgov/diagrams/Registrar Entrada - Diagrama Sequencia.png",
        description:
            "Fluxo de registro de nova entrada de material no almoxarifado: Responsável Estoque → Interface AxisGov → EntradaController → Banco de Dados. Validação de dados com retorno HTTP 201 (sucesso) ou HTTP 400 (dados inválidos).",
        previewCode: `sd Registrar Entrada - Diagrama Sequencia
  Atores: Responsavel Estoque, Interface AxisGov,
          EntradaController, Banco de Dados

  1: Acessar Entrada()
  1.1: NovaEntrada(Produto, Quantidade Entrada,
       Data da Entrada, Observação)
  1.1.1: StoreProduto(Codigo, Produto, Estoque, Status)
  Retorna Status
  [Dados Válidos]   → 201 "Entrada registrada com sucesso"
  [Dados Inválidos] → 400 "Houve um erro ao registrar a entrada"
  4: Retorna resultado(Sucesso ou Erro)`,
    },
    {
        id: "estados-pedido",
        title: "Diagrama de Estados: Ciclo de Vida do Pedido",
        type: "Estados",
        imagePath: "/images/axisgov/diagrams/Pedido-Secretaria.png",
        description:
            "Máquina de estados formal do Pedido de Material no AxisGov: DashboardUsuario → [Solicita material] → PedidoPendenteSecretaria → [Aprovação] → PedidoAprovado → [Realiza a entrega] → Entregue / [Rejeição] → PedidoRejeitado → Encerra Sistema.",
        previewCode: `stm Pedido-Secretaria

[*] --> DashboardUsuario
DashboardUsuario --> PedidoPendenteSecretaria
  : Solicita material

PedidoPendenteSecretaria --> PedidoAprovado
  : Aprovação (Admin)
PedidoPendenteSecretaria --> PedidoRejeitado
  : Rejeição (Admin)

PedidoAprovado --> Entregue
  : Realiza a entrega

Entregue --> [*] : Encerra Sistema
PedidoRejeitado --> [*] : Encerra Sistema`,
    },
    {
        id: "der",
        title: "Diagrama de Entidade-Relacionamento (DER)",
        type: "DER / Entidade-Relacionamento",
        imagePath: "/images/axisgov/diagrams/Diagrama_DER.png",
        description:
            "Modelagem completa do banco de dados do AxisGov: entidades Usuário, Secretaria, Permissao, Produto, Estoque, Movimentacao_estoque, Pedido (Solicitacao_Material e Solicitacao_Produto), Centro_Custo, Recebimento_Material, Relatorio, Requisicao e Item_Requisicao. Normalizado em 3FN.",
        previewCode: `TABLE usuarios (id_usuario BIGINT PK, nome, email,
  senha, telefone, ativo BOOLEAN,
  tipo_usuario BIGINT FK);

TABLE produtos (id_produto BIGINT PK,
  nome, codigo INTEGER, categoria_id,
  estoque_atual INTEGER, valor_unitario DECIMAL,
  ativo BOOLEAN);

TABLE estoque (id_estoque BIGINT PK,
  quantidade INTEGER, estoque_minimo DECIMAL,
  estoque_maximo DECIMAL, ultima_atualizacao,
  id_produto BIGINT FK);

TABLE movimentacao_estoque (id_movimentacao BIGINT PK,
  tipo VARCHAR, quantidade INTEGER,
  data TIMESTAMP, observacao, id_estoque FK,
  id_usuario FK);

TABLE solicitacao_material (id_solicitacao BIGINT PK,
  data_solicitacao, status VARCHAR,
  justificativa, id_usuario FK);`,
    },
    {
        id: "implantacao",
        title: "Diagrama de Implantação (Deployment)",
        type: "Implantação",
        imagePath: "/images/axisgov/diagrams/Deployment Diagram0.png",
        description:
            "Arquitetura de implantação do AxisGov: Dispositivo Cliente (Web Browser) → HTTP → Servidor (Laravel/PHP com Blade) → TCP/IP PostgreSQL → Banco de Dados PostgreSQL. Ambiente monolítico com server-side rendering via Blade e persistência relacional.",
        previewCode: `<<device>> Dispositivo Cliente
  Web Browser
    --[HTTP]--> Server

<<server>> Server
  <<executionEnvironment>> Laravel / PHP
    <<executionEnvironment>> Blade
  --[TCP/IP PostgreSQL]--> Database

<<database>> Database
  Postgres`,
    },
];

// ==========================================
// RENDERIZADOR DE INTERFACES REAIS (NO BROWSER FRAME)
// ==========================================
function RealSystemScreen({ type }: { type: CaseStudy["screenType"] }) {
    if (type === "auth") {
        return (
            <div className="sys-screen auth-screen">
                <div className="auth-layout">
                    <div className="auth-panel-left">
                        <div className="gov-seal">
                            <Icon name="shield" size={28} />
                        </div>
                        <h3>AxisGov • Acesso Seguro</h3>
                        <p>Plataforma Integrada de Gestão Pública Municipal. Controle de acesso por perfil (RBAC).</p>
                        <div className="cert-badge">
                            <span className="cert-dot" />
                            <span>Sessão Protegida • Laravel Sanctum</span>
                        </div>
                    </div>
                    <div className="auth-panel-right">
                        <div className="auth-card-mock">
                            <span className="mock-label">PORTAL INSTITUCIONAL • AUTENTICAÇÃO</span>
                            <h4 className="mock-title">Identificação do Usuário</h4>
                            <div className="mock-field">
                                <label>E-mail Institucional</label>
                                <div className="mock-input">admin@axisgov.pr.gov.br</div>
                            </div>
                            <div className="mock-field">
                                <label>Senha de Acesso</label>
                                <div className="mock-input code-dots">● ● ● ● ● ● ● ●</div>
                            </div>
                            <div className="mock-field">
                                <label>Perfil de Acesso (RBAC)</label>
                                <div className="mock-input text-blue font-bold">Administrador do Sistema (Nível 1)</div>
                            </div>
                            <div className="mock-btn-row">
                                <div className="mock-btn primary">Acessar Painel</div>
                                <div className="mock-btn secondary">Alterar Senha</div>
                            </div>
                            <div className="mock-footer-sec">
                                <span>Middleware Auth • Restrição de Inativos (ativo = true)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === "dashboard") {
        return (
            <div className="sys-screen dash-screen">
                <div className="dash-top-bar">
                    <div className="dash-heading">
                        <span className="dash-pill">MÓDULO DE PEDIDOS</span>
                        <h4>Requisições de Material entre Secretarias & Almoxarifado</h4>
                    </div>
                    <div className="dash-actions">
                        <span className="dash-filter">Aprovação Pendente (Admin)</span>
                    </div>
                </div>

                <div className="dash-kpi-row">
                    <div className="dash-stat">
                        <span className="stat-label">Pedidos Pendentes</span>
                        <span className="stat-val text-amber">04</span>
                        <span className="stat-sub">Aguardando Avaliação</span>
                    </div>
                    <div className="dash-stat">
                        <span className="stat-label">Pedidos Aprovados</span>
                        <span className="stat-val text-green">28</span>
                        <span className="stat-sub">Liberados para Entrega</span>
                    </div>
                    <div className="dash-stat">
                        <span className="stat-label">Pedidos Rejeitados</span>
                        <span className="stat-val text-muted">02</span>
                        <span className="stat-sub">Com Devolutiva Formal</span>
                    </div>
                </div>

                <div className="dash-table-wrap">
                    <div className="dash-table-head">
                        <span>PEDIDO #</span>
                        <span>SOLICITANTE / SECRETARIA</span>
                        <span>PRODUTO REQUISITADO</span>
                        <span>QTD</span>
                        <span>STATUS</span>
                    </div>
                    {[
                        { num: "PED-2026-088", solicitante: "Diretoria Escolar • Sec. Educação", prod: "Papel A4 75g (Resma 500fls)", qtd: "50 cx", st: "PENDENTE" },
                        { num: "PED-2026-087", solicitante: "UPA Central • Sec. Saúde", prod: "Álcool em Gel 70% 5L", qtd: "20 gal", st: "APROVADO" },
                        { num: "PED-2026-086", solicitante: "Fiscalização • Sec. Obras", prod: "Prancheta Acrílica Ofício", qtd: "15 un", st: "APROVADO" },
                        { num: "PED-2026-085", solicitante: "Gabinete • Sec. Administração", prod: "Toner HP Laser Jet 85A", qtd: "04 un", st: "REJEITADO" },
                    ].map((row, i) => (
                        <div className="dash-table-row" key={i}>
                            <span className="font-mono font-bold text-blue">{row.num}</span>
                            <span>{row.solicitante}</span>
                            <span>{row.prod}</span>
                            <span className="font-mono">{row.qtd}</span>
                            <span>
                                <span className={`table-badge ${row.st === "APROVADO" ? "green" : row.st === "PENDENTE" ? "amber" : "blue"}`}>
                                    {row.st}
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (type === "patrimonio") {
        return (
            <div className="sys-screen pat-screen">
                <div className="dash-top-bar">
                    <div className="dash-heading">
                        <span className="dash-pill">ADMINISTRAÇÃO GERAL</span>
                        <h4>Gestão de Secretarias Municipais & Matriz de Usuários</h4>
                    </div>
                    <div className="dash-actions">
                        <span className="dash-filter">34 Usuários • 6 Secretarias</span>
                    </div>
                </div>

                <div className="pat-table-wrap">
                    <div className="dash-table-head">
                        <span>ID / MAT.</span>
                        <span>USUÁRIO / SERVIDOR</span>
                        <span>SECRETARIA VINCULADA</span>
                        <span>PERFIL RBAC</span>
                        <span>SITUAÇÃO</span>
                    </div>
                    {[
                        {
                            id: "USR-001",
                            nome: "Carlos Eduardo Mendes",
                            email: "carlos.mendes@axisgov.pr.gov.br",
                            sec: "Secretaria Geral de Administração",
                            role: "ADMINISTRADOR",
                            st: "ATIVO",
                        },
                        {
                            id: "USR-004",
                            nome: "Dra. Mariana Vasconcelos",
                            email: "mariana.saude@axisgov.pr.gov.br",
                            sec: "Secretaria Municipal de Saúde",
                            role: "SECRETÁRIO",
                            st: "ATIVO",
                        },
                        {
                            id: "USR-009",
                            nome: "Prof. Roberto Alcantara",
                            email: "roberto.escola@axisgov.pr.gov.br",
                            sec: "Secretaria Municipal de Educação",
                            role: "DIRETOR",
                            st: "ATIVO",
                        },
                        {
                            id: "USR-014",
                            nome: "Valmir Ferreira dos Santos",
                            email: "valmir.estoque@axisgov.pr.gov.br",
                            sec: "Almoxarifado Central",
                            role: "RESPONSÁVEL ESTOQUE",
                            st: "ATIVO",
                        },
                    ].map((item) => (
                        <div className="dash-table-row" key={item.id}>
                            <span className="font-mono text-blue font-bold">{item.id}</span>
                            <div>
                                <strong className="font-bold">{item.nome}</strong>
                                <div className="text-muted" style={{ fontSize: "11px" }}>{item.email}</div>
                            </div>
                            <span className="text-muted">{item.sec}</span>
                            <span className="font-mono text-blue">{item.role}</span>
                            <span>
                                <span className="table-badge green">{item.st}</span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // estoque
    return (
        <div className="sys-screen est-screen">
            <div className="dash-top-bar">
                <div className="dash-heading">
                    <span className="dash-pill">ALMOXARIFADO CENTRAL</span>
                    <h4>Catálogo de Produtos & Controle de Saldo de Insumos</h4>
                </div>
                <div className="dash-actions">
                    <span className="dash-filter">Validação Atômica (DB::transaction)</span>
                </div>
            </div>

            <div className="est-grid-cards">
                <div className="est-card-item">
                    <span className="est-code font-mono">COD-1042 • MAT. EXPEDIENTE</span>
                    <h5>Papel Sulfite A4 75g (Caixa c/ 10 resmas)</h5>
                    <div className="est-bar-wrap">
                        <div className="est-bar-fill" style={{ width: "78%" }} />
                    </div>
                    <div className="est-meta-row">
                        <span>Saldo: 450 caixas</span>
                        <span className="text-green font-bold">Saldo Adequado</span>
                    </div>
                </div>
                <div className="est-card-item">
                    <span className="est-code font-mono">COD-2015 • SAÚDE & HIGIENE</span>
                    <h5>Álcool em Gel 70% Hospitalar 5 Litros</h5>
                    <div className="est-bar-wrap">
                        <div className="est-bar-fill alert" style={{ width: "22%" }} />
                    </div>
                    <div className="est-meta-row">
                        <span>Saldo: 38 galões</span>
                        <span className="text-amber font-bold">Ponto de Reposição</span>
                    </div>
                </div>
                <div className="est-card-item">
                    <span className="est-code font-mono">COD-1088 • INFORMÁTICA</span>
                    <h5>Cartucho de Toner HP Laser Jet 85A</h5>
                    <div className="est-bar-wrap">
                        <div className="est-bar-fill" style={{ width: "65%" }} />
                    </div>
                    <div className="est-meta-row">
                        <span>Saldo: 24 unidades</span>
                        <span className="text-green font-bold">Regular</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// COMPONENTE PRINCIPAL (HOME DO PORTFÓLIO)
// ==========================================
export default function Home() {
    const [activeCase, setActiveCase] = useState<number>(0);
    const [activeDiagram, setActiveDiagram] = useState<DiagramItem | null>(null);
    const [activeVideoModal, setActiveVideoModal] = useState<{ src: string; title: string; desc: string } | null>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // Efeito de scroll suave e detecção sticky
    useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>("[data-case-index]");
        if (!sections.length) return;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute("data-case-index"));
                        if (!isNaN(index)) {
                            setActiveCase(index);
                        }
                    }
                });
            },
            {
                root: null,
                rootMargin: "-20% 0px -40% 0px",
                threshold: 0.2,
            }
        );

        sections.forEach((sec) => observerRef.current?.observe(sec));

        return () => {
            observerRef.current?.disconnect();
        };
    }, []);

    const scrollToCase = (index: number) => {
        setActiveCase(index);
        const element = document.getElementById(`case-anchor-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <Head>
                <title>AxisGov — Portfólio de Estágio • UniFil</title>
                <meta
                    name="description"
                    content="Avaliação Bimestral de Estágio Supervisionado — UniFil. Portfólio oficial do projeto AxisGov desenvolvido em Laravel 11, React 19, TypeScript e PostgreSQL."
                />
            </Head>

            <div className="gov-site">
                {/* ==========================================
                    BARRA INSTITUCIONAL SUPERIOR UNIFIL
                   ========================================== */}
                <div className="gov-topbar">
                    <div className="gov-container topbar-flex">
                        <div className="gov-topbar-left">
                            <span className="gov-flag-mark" />
                            <span className="gov-topbar-title">
                                <strong>UniFil</strong> — CENTRO UNIVERSITÁRIO FILADÉLFIA • AVALIAÇÃO BIMESTRAL DE ESTÁGIO (ENTREGA: 14/09)
                            </span>
                        </div>
                        <div className="gov-topbar-right">
                            <span className="topbar-link">10,0 Pontos</span>
                            <span className="topbar-sep">/</span>
                            <span className="topbar-link">Engenharia de Software</span>
                            <span className="topbar-sep">/</span>
                            <span className="topbar-link">Ano Letivo 2024</span>
                        </div>
                    </div>
                </div>

                {/* ==========================================
                    HEADER PRINCIPAL (NAVEGAÇÃO PELOS 7 ITENS DO EDITAL)
                   ========================================== */}
                <header className="gov-header">
                    <div className="gov-container header-flex">
                        <a href="#1-pagina-inicial" className="gov-brand">
                            <div className="gov-brand-icon">
                                <Icon name="shield" size={20} />
                            </div>
                            <div className="gov-brand-text">
                                <span className="brand-name">
                                    Axis<strong>Gov</strong>
                                </span>
                                <span className="brand-tagline">PORTFÓLIO DE ESTÁGIO SUPERVISIONADO</span>
                            </div>
                        </a>

                        <nav className="gov-nav">
                            <a href="#1-pagina-inicial" className="gov-nav-link">1. Início</a>
                            <a href="#2-sobre-o-projeto" className="gov-nav-link">2. Sobre o Projeto</a>
                            <a href="#3-casos-e-cronograma" className="gov-nav-link">3. Casos & Cronograma</a>
                            <a href="#4-documentacao" className="gov-nav-link">4. Documentação</a>
                            <a href="#5-telas-e-video" className="gov-nav-link">5. Telas & Vídeo</a>
                            <a href="#6-relatorio-estagio" className="gov-nav-link">6. Relatório</a>
                            <a href="#7-identificacao-aluno" className="gov-nav-btn">7. Identificação</a>
                        </nav>
                    </div>
                </header>

                <main>
                    {/* ==========================================
                        ITEM 1 DO EDITAL: PÁGINA INICIAL
                        - Nome do projeto
                        - Objetivo do sistema
                        - Breve descrição do projeto
                       ========================================== */}
                    <section id="1-pagina-inicial" className="hero-institutional">
                        {/* TEXTURAS TÉCNICAS DE FUNDO (GRID & TOPOGRAFIA) */}
                        <div className="hero-blueprint-grid" />
                        <div className="hero-topographic-lines" />

                        {/* FRAGMENTOS DE CÓDIGO E ARQUITETURA ESMAECIDOS */}
                        <div className="hero-code-watermark left">
                            <code>{`// Domain Layer: Compliance & Audit Trail
final class ProcessoEmpenhoService {
    public function liquidar(Processo $p, Servidor $auditor): Hash {
        DB::transaction(fn() => {
            $p->validarConformidadeLRF();
            $hash = AuditoriaLedger::append([
                'autor' => $auditor->matricula,
                'rubrica' => $p->rubrica_orcamentaria,
                'sha256' => hash('sha256', $p->payload())
            ]);
            return $hash;
        });
    }
}`}</code>
                        </div>

                        <div className="hero-code-watermark right">
                            <code>{`-- Relational Ledger: Append-Only Trigger
CREATE TRIGGER trg_audit_immutable
BEFORE UPDATE OR DELETE ON auditoria_governamental
FOR EACH ROW EXECUTE FUNCTION fn_raise_security_violation();

-- Indexação Textual Concorrente
CREATE INDEX CONCURRENTLY idx_patrimonio_gin
ON bens_tombados USING gin (to_tsvector('portuguese', descricao));`}</code>
                        </div>

                        <div className="gov-container hero-inner-grid">
                            {/* COLUNA ESQUERDA: DISCURSO INSTITUCIONAL FORTE */}
                            <div className="hero-content">
                                <div className="hero-seal-badge">
                                    <span className="seal-dot" />
                                    <span>ESTRUTURA OBRIGATÓRIA 1 • PÁGINA INICIAL DO SISTEMA</span>
                                </div>

                                <h1 className="hero-title">
                                    AxisGov
                                </h1>

                                <div className="hero-objective-box">
                                    <span className="obj-tag">OBJETIVO DO SISTEMA:</span>
                                    <p>
                                        Centralizar, organizar e auditar os processos administrativos, controle de patrimônio público,
                                        gestão de suprimentos em almoxarifados e execução orçamentária fiscal, garantindo conformidade estrita
                                        com a Lei de Responsabilidade Fiscal e diretrizes de transparência pública.
                                    </p>
                                </div>

                                <p className="hero-lead">
                                    <strong>Breve descrição do projeto:</strong> O AxisGov é uma plataforma corporativa desenvolvida durante o estágio supervisionado,
                                    utilizando o ecossistema 
                                </p>

                                <div className="hero-cta-actions">
                                    <a href="#3-casos-e-cronograma" className="btn-gov primary">
                                        <span>Casos de Uso & Cronograma</span>
                                        <Icon name="arrow" size={14} />
                                    </a>
                                    <a href="#5-telas-e-video" className="btn-gov outline">
                                        <Icon name="video" size={14} />
                                        <span>Evidências & Telas</span>
                                    </a>
                                    <a href="#6-relatorio-estagio" className="btn-gov outline">
                                        <Icon name="file" size={14} />
                                        <span>PDF do Relatório</span>
                                    </a>
                                </div>
                            </div>

                            {/* COLUNA DIREITA: TELA REAL EM PERSPECTIVA ISOMÉTRICA */}
                            <div className="hero-isometric-wrapper">
                                <div className="isometric-stage">
                                    {/* MOLDURA DO NAVEGADOR COM SOMBRA RÍGIDA PROJETADA */}
                                    <div className="browser-frame-iso">
                                        <div className="browser-header-iso">
                                            <div className="browser-traffic-dots">
                                                <span className="traffic-dot red" />
                                                <span className="traffic-dot yellow" />
                                                <span className="traffic-dot green" />
                                            </div>
                                            <div className="browser-url-iso">
                                                <Icon name="lock" size={11} className="text-green" />
                                                <span>axisgov.local / painel-geral</span>
                                            </div>
                                            <div className="browser-status-iso">
                                                <span className="status-live-badge">SISTEMA ATIVO</span>
                                            </div>
                                        </div>

                                        {/* TELA REAL DO AXISGOV */}
                                        <div className="browser-body-iso real-image-body">
                                            <img
                                                src="/images/axisgov/dashboard-real.png"
                                                alt="Painel Geral do AxisGov - Gestão Municipal"
                                                className="real-system-screenshot"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        ITEM 2 DO EDITAL: SOBRE O PROJETO
                        - Problema que o sistema busca resolver
                        - Tecnologias utilizadas
                        - Arquitetura ou descrição resumida da solução
                       ========================================== */}
                    <section id="2-sobre-o-projeto" className="section-utilitarian">
                        <div className="gov-container">
                            <div className="util-header">
                                <span className="util-kicker">ESTRUTURA OBRIGATÓRIA 2 / SOBRE O PROJETO</span>
                                <h2 className="util-title">
                                    Diagnóstico do Problema, Escolhas Tecnológicas & Arquitetura da Solução.
                                </h2>
                                <p className="util-lead">
                                    O AxisGov nasceu da necessidade prática identificada durante as atividades de estágio,
                                    onde processos públicos sofrem com perda de dados, lentidão na tramitação e risco fiscal.
                                </p>
                            </div>

                            {/* 2.1 PROBLEMA QUE O SISTEMA BUSCA RESOLVER */}
                            <div className="problem-statement-box">
                                <div className="problem-header">
                                    <Icon name="alertCircle" size={20} className="text-amber" />
                                    <h3>2.1 O Problema que o Sistema Busca Resolver</h3>
                                </div>
                                <div className="problem-grid">
                                    <div className="problem-card">
                                        <h4>Fragmentação & Descontrole</h4>
                                        <p>
                                            Órgãos públicos operavam com controles em planilhas dispersas e arquivos físicos,
                                            resultando em extravio de tombos patrimoniais, divergências no inventário de suprimentos e falhas na prestação de contas.
                                        </p>
                                    </div>
                                    <div className="problem-card">
                                        <h4>Morosidade e Falta de Trilha</h4>
                                        <p>
                                            Ausência de uma trilha confiável de auditoria, impossibilitando apurar a autoria e data
                                            exata de alterações em empenhos ou baixas de bens, gerando inconformidades frequentes junto ao Tribunal de Contas.
                                        </p>
                                    </div>
                                    <div className="problem-card">
                                        <h4>Sistemas Legados com Recarregamento Lento</h4>
                                        <p>
                                            Sistemas antigos baseados em formulários com recarregamento total de página causavam perda de digitação,
                                            quedas constantes de sessão e baixa produtividade dos servidores públicos em expediente contínuo.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2.2 TECNOLOGIAS UTILIZADAS (ESTILO BRUTALISTA) */}
                            <div className="tech-section-wrapper">
                                <h3 className="section-inner-heading">2.2 Tecnologias Utilizadas na Construção do Sistema</h3>
                                <div className="brutalist-tech-grid">
                                    <div className="brutalist-tech-item">
                                        <div className="tech-solid-line" />
                                        <span className="tech-category">FRAMEWORK DE BACKEND</span>
                                        <h4 className="tech-main-name">LARAVEL 11</h4>
                                        <p className="tech-description">
                                            Framework PHP 8.4 orientado a Clean Architecture, injeção de dependência e Eloquent ORM com queries otimizadas.
                                        </p>
                                    </div>

                                    <div className="brutalist-tech-item">
                                        <div className="tech-solid-line" />
                                        <span className="tech-category">SPA REATIVO & TIPAGEM</span>
                                        <h4 className="tech-main-name">REACT 19 + TS</h4>
                                        <p className="tech-description">
                                            Interface componentizada com TypeScript estrito, garantindo zero erros de tipo e rendering atômico.
                                        </p>
                                    </div>

                                    <div className="brutalist-tech-item">
                                        <div className="tech-solid-line" />
                                        <span className="tech-category">BANCO DE DADOS ACID</span>
                                        <h4 className="tech-main-name">POSTGRESQL 16</h4>
                                        <p className="tech-description">
                                            Persistência relacional com integridade referencial, particionamento e triggers para trilha de auditoria Write-Once.
                                        </p>
                                    </div>

                                    <div className="brutalist-tech-item">
                                        <div className="tech-solid-line" />
                                        <span className="tech-category">PROTOCOLO DE INTEGRAÇÃO</span>
                                        <h4 className="tech-main-name">INERTIA.JS V2</h4>
                                        <p className="tech-description">
                                            Elimina endpoints REST redundantes; une a segurança de roteamento no servidor à agilidade de um SPA sem reload.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 2.3 ARQUITETURA OU DESCRIÇÃO RESUMIDA DA SOLUÇÃO */}
                            <div className="arch-summary-box">
                                <h3 className="section-inner-heading">2.3 Arquitetura e Descrição Resumida da Solução</h3>
                                <div className="arch-summary-content">
                                    <p>
                                        A solução adota o padrão <strong>Clean Architecture (Arquitetura Limpa)</strong> estruturada em três camadas fundamentais:
                                    </p>
                                    <div className="arch-layers-flow">
                                        <div className="flow-step">
                                            <span className="flow-num">Camada 1</span>
                                            <strong>Apresentação (Client-Side)</strong>
                                            <p>Componentes React 19 desacoplados e tipados, consumindo dados do Laravel sem APIs REST intermediárias via Inertia.js.</p>
                                        </div>
                                        <div className="flow-arrow">→</div>
                                        <div className="flow-step">
                                            <span className="flow-num">Camada 2</span>
                                            <strong>Regras de Negócio (Services & RBAC)</strong>
                                            <p>Controllers magros que delegam a execução a Services dedicados, validando conformidade fiscal e segregação de funções.</p>
                                        </div>
                                        <div className="flow-arrow">→</div>
                                        <div className="flow-step">
                                            <span className="flow-num">Camada 3</span>
                                            <strong>Persistência & Auditoria (PostgreSQL)</strong>
                                            <p>Repositórios que persistem dados em transações atômicas (ACID) e gravam hashes imutáveis em log append-only.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        ITEM 3 DO EDITAL: CASOS DE USO & CRONOGRAMA
                        - Apresentar todos os casos de uso previstos (Nome e breve descrição)
                        - Cronograma em formato de TABELA com datas/previsões
                       ========================================== */}
                    <section id="3-casos-e-cronograma" className="section-sticky-cases">
                        <div className="gov-container">
                            <div className="sticky-cases-header">
                                <span className="util-kicker">ESTRUTURA OBRIGATÓRIA 3 / CASOS DE USO & CRONOGRAMA</span>
                                <h2 className="util-title">
                                    Casos de Uso Previstos & Cronograma de Desenvolvimento.
                                </h2>
                                <p className="util-lead">
                                    Abaixo estão detalhados os casos de uso previstos para a plataforma, acompanhados da respectiva
                                    tabela de cronograma de desenvolvimento que reflete a evolução real durante o bimestre de estágio.
                                </p>
                            </div>

                            {/* 3.1 CASOS DE USO PREVISTOS (INTERATIVO COM TELAS REAIS) */}
                            <div className="sticky-split-layout">
                                <div className="sticky-nav-column">
                                    <div className="sticky-nav-inner">
                                        <p className="sticky-instruction">3.1 NAVEGAR PELOS CASOS DE USO:</p>

                                        <nav className="sticky-links-list">
                                            {CASE_STUDIES.map((item, idx) => {
                                                const isActive = activeCase === idx;
                                                return (
                                                    <button
                                                        type="button"
                                                        key={item.id}
                                                        className={`sticky-link-btn ${isActive ? "active" : ""}`}
                                                        onClick={() => scrollToCase(idx)}
                                                    >
                                                        <div className="btn-num">{item.num}</div>
                                                        <div className="btn-text">
                                                            <span className="btn-cat">{item.label}</span>
                                                            <strong className="btn-title">{item.title}</strong>
                                                        </div>
                                                    </button>
                                                );
                                            })}
                                        </nav>
                                    </div>
                                </div>

                                <div className="sticky-screens-column">
                                    {CASE_STUDIES.map((item, idx) => (
                                        <div
                                            id={`case-anchor-${idx}`}
                                            data-case-index={idx}
                                            className="sticky-screen-block"
                                            key={item.id}
                                        >
                                            <div className="screen-detail-header" style={{ marginBottom: 0 }}>
                                                <div className="screen-tag-row">
                                                    <span className="screen-num font-mono">{item.num} / 04</span>
                                                    <span className="screen-label">{item.label}</span>
                                                </div>
                                                <h3 className="screen-title">{item.title}</h3>
                                                <p className="screen-actors-badge">{item.actors}</p>
                                                <p className="screen-desc">{item.subtitle}</p>
                                                <div className="screen-regulation">
                                                    <Icon name="shield" size={14} />
                                                    <span>{item.regulation}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* 3.2 CRONOGRAMA DE DESENVOLVIMENTO EM TABELA (EXIGIDO NO EDITAL) */}
                            <div className="schedule-table-section">
                                <div className="schedule-header">
                                    <div className="schedule-header-left">
                                        <span className="table-badge-gov">EXIGÊNCIA EDITAL UNIFIL</span>
                                        <h3 className="schedule-title">3.2 Cronograma de Desenvolvimento do Estágio (Formato Tabela)</h3>
                                        <p className="schedule-subtitle">
                                            Evolução cronológica alinhada ao planejamento bimestral de estágio e status real de implementação de cada caso de uso.
                                        </p>
                                    </div>
                                    <div className="schedule-header-right">
                                        <span className="status-period-pill">Bimestre: Agosto — Setembro / 2024</span>
                                    </div>
                                </div>

                                <div className="gov-table-container">
                                    <table className="official-gov-table">
                                        <thead>
                                            <tr>
                                                <th>CÓDIGO</th>
                                                <th>CASO DE USO / ATIVIDADE</th>
                                                <th>MÓDULO DO SISTEMA</th>
                                                <th>DATA DE INÍCIO</th>
                                                <th>TÉRMINO / PREVISÃO</th>
                                                <th>RESPONSÁVEL</th>
                                                <th>STATUS DE EXECUÇÃO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {SCHEDULE_DATA.map((row) => (
                                                <tr key={row.code}>
                                                    <td className="font-mono font-bold text-blue">{row.code}</td>
                                                    <td className="font-bold">{row.name}</td>
                                                    <td className="text-muted">{row.module}</td>
                                                    <td className="font-mono">{row.startDate}</td>
                                                    <td className="font-mono font-bold">{row.endDate}</td>
                                                    <td>{row.responsible}</td>
                                                    <td>
                                                        <span
                                                            className={`status-pill-table ${
                                                                row.status === "Concluído"
                                                                    ? "done"
                                                                    : row.status === "Em Andamento"
                                                                    ? "wip"
                                                                    : "plan"
                                                            }`}
                                                        >
                                                            {row.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        ITEM 4 DO EDITAL: DOCUMENTAÇÃO
                        - Links para todos os diagramas desenvolvidos:
                          * Diagrama de Classes
                          * Diagramas de Sequência
                          * Diagramas de Estados
                          * Outros diagramas (DER, Casos de Uso)
                       ========================================== */}
                    <section id="4-documentacao" className="section-diagrams-official">
                        <div className="gov-container">
                            <div className="util-header">
                                <span className="util-kicker">ESTRUTURA OBRIGATÓRIA 4 / DOCUMENTAÇÃO TÉCNICA</span>
                                <h2 className="util-title">
                                    Diagramas de Engenharia de Software Desenvolvidos no Estágio.
                                </h2>
                                <p className="util-lead">
                                    Todos os diagramas elaborados durante o projeto encontram-se disponíveis abaixo com
                                    acesso livre e sem necessidade de solicitação de permissão, em conformidade com as regras da UniFil.
                                </p>
                            </div>

                            <div className="diagrams-grid">
                                {DIAGRAMS_DATA.map((diag) => (
                                    <div className="diagram-card-gov" key={diag.id}>
                                        <div className="diag-card-top">
                                            <span className="diag-type-badge font-mono">{diag.type}</span>
                                            <button
                                                type="button"
                                                className="btn-open-diag"
                                                onClick={() => setActiveDiagram(diag)}
                                            >
                                                <Icon name="search" size={12} />
                                                <span>Expandir Diagrama</span>
                                            </button>
                                        </div>

                                        <h3 className="diag-title">{diag.title}</h3>
                                        <p className="diag-desc">{diag.description}</p>

                                        {/* Miniatura real do diagrama */}
                                        <div
                                            className="diag-image-preview"
                                            onClick={() => setActiveDiagram(diag)}
                                            title="Clique para ampliar"
                                        >
                                            <img
                                                src={diag.imagePath}
                                                alt={diag.title}
                                                className="diag-thumb-img"
                                                loading="lazy"
                                            />
                                            <div className="diag-image-overlay">
                                                <Icon name="search" size={20} />
                                                <span>Ampliar Diagrama</span>
                                            </div>
                                        </div>

                                        <div className="diag-card-footer">
                                            <button
                                                type="button"
                                                className="link-diag-action"
                                                onClick={() => setActiveDiagram(diag)}
                                            >
                                                <span>Ver diagrama completo</span>
                                                <Icon name="arrow" size={12} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        ITEM 5 DO EDITAL: TELAS / VÍDEOS
                        - Capturas de tela das principais funcionalidades
                        - Vídeo demonstrando o sistema (máx. 5 minutos)
                       ========================================== */}
                    <section id="5-telas-e-video" className="section-interfaces-grid">
                        <div className="gov-container">
                            <div className="util-header">
                                <span className="util-kicker">ESTRUTURA OBRIGATÓRIA 5 / TELAS & VÍDEO DEMONSTRATIVO</span>
                                <h2 className="util-title">
                                    Evidências de Funcionamento do Sistema em Produção.
                                </h2>
                                <p className="util-lead">
                                    Abaixo são apresentadas as capturas reais de telas dentro de molduras de navegadores com profundidade
                                    agressiva e a área reservada para o vídeo de até 5 minutos demonstrando a operação prática do AxisGov.
                                </p>
                            </div>

                            {/* 5.1 VÍDEO DEMONSTRATIVO 1 DO SISTEMA (MÁXIMO 5 MINUTOS) */}
                            <div className="video-demonstrativo-card" style={{ marginBottom: "32px" }}>
                                <div className="video-card-left">
                                    <span className="video-badge-tag">EVIDÊNCIA 5.1 • VÍDEO DE DEMONSTRAÇÃO 1</span>
                                    <h3 className="video-heading">Demonstração Prática do AxisGov em Operação (Vídeo 1)</h3>
                                    <p className="video-subtext">
                                        Gravação detalhada demonstrando a arquitetura em produção do AxisGov: autenticação segura com controle
                                        de acesso por perfil (RBAC), navegação pelo catálogo de materiais, parametrização de secretarias
                                        e validação dos formulários transacionais.
                                    </p>
                                    <div className="video-features-pills">
                                        <span>• Demonstração Guiada</span>
                                        <span>• Sem Necessidade de Permissão</span>
                                        <span>• Arquivo MP4 Local</span>
                                    </div>
                                    <div className="video-action-row">
                                        <button
                                            type="button"
                                            className="btn-gov primary"
                                            onClick={() =>
                                                setActiveVideoModal({
                                                    src: "/videos/video-1.mp4",
                                                    title: "Vídeo 1 — Operação Geral do Sistema AxisGov",
                                                    desc: "Demonstração prática do AxisGov em operação: autenticação RBAC, cadastros mestres e catálogo de produtos.",
                                                })
                                            }
                                        >
                                            <Icon name="video" size={16} />
                                            <span>Expandir Player do Vídeo 1</span>
                                        </button>
                                        <a
                                            href="/videos/video-1.mp4"
                                            download
                                            className="btn-gov outline"
                                        >
                                            <Icon name="download" size={14} />
                                            <span>Baixar Vídeo 1 (MP4)</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="video-card-right">
                                    <div className="video-native-frame">
                                        <video
                                            src="/videos/video-1.mp4"
                                            controls
                                            preload="metadata"
                                            className="stage-real-video"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 5.2 VÍDEO DEMONSTRATIVO 2 DO SISTEMA (FLUXO OPERACIONAL) */}
                            <div className="video-demonstrativo-card" style={{ marginBottom: "40px" }}>
                                <div className="video-card-left">
                                    <span className="video-badge-tag" style={{ background: "#065f46" }}>EVIDÊNCIA 5.2 • VÍDEO DE DEMONSTRAÇÃO 2</span>
                                    <h3 className="video-heading">Fluxo de Requisições & Movimentações de Estoque (Vídeo 2)</h3>
                                    <p className="video-subtext">
                                        Demonstração complementar focada no ciclo de requisição de materiais: solicitação emitida pela Diretoria
                                        setorial, fila de homologação e aprovação pelo Administrador, e registro atômico com lock pessimista
                                        de saídas e entradas no almoxarifado.
                                    </p>
                                    <div className="video-features-pills">
                                        <span>• Ciclo de Pedidos</span>
                                        <span>• Aprovação pelo Admin</span>
                                        <span>• Arquivo MP4 Local</span>
                                    </div>
                                    <div className="video-action-row">
                                        <button
                                            type="button"
                                            className="btn-gov primary"
                                            onClick={() =>
                                                setActiveVideoModal({
                                                    src: "/videos/video-2.mp4",
                                                    title: "Vídeo 2 — Fluxo de Requisições & Almoxarifado",
                                                    desc: "Demonstração prática do fluxo de pedidos de material, aprovação pelo Administrador e conciliação de estoque.",
                                                })
                                            }
                                        >
                                            <Icon name="video" size={16} />
                                            <span>Expandir Player do Vídeo 2</span>
                                        </button>
                                        <a
                                            href="/videos/video-2.mp4"
                                            download
                                            className="btn-gov outline"
                                        >
                                            <Icon name="download" size={14} />
                                            <span>Baixar Vídeo 2 (MP4)</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="video-card-right">
                                    <div className="video-native-frame">
                                        <video
                                            src="/videos/video-2.mp4"
                                            controls
                                            preload="metadata"
                                            className="stage-real-video"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* 5.3 CAPTURAS DE TELA (PRINTS DAS PRINCIPAIS FUNCIONALIDADES) */}
                            <div className="interfaces-cards-grid">
                                <div className="interface-showcase-item">
                                    <div className="browser-frame-hard">
                                        <div className="browser-bar-minimal">
                                            <div className="bar-dots"><span /><span /><span /></div>
                                            <div className="bar-address"><span>axisgov.local / painel-geral</span></div>
                                        </div>
                                        <div className="browser-content-wrap real-image-body">
                                            <img
                                                src="/images/axisgov/dashboard-real.png"
                                                alt="Painel Geral do AxisGov - Gestão Municipal"
                                                className="real-system-screenshot"
                                            />
                                        </div>
                                    </div>
                                    <div className="interface-caption">
                                        <h4>Captura de Tela: Painel Geral de Gestão Municipal & Registro de Atividades</h4>
                                        <p>Visão em tempo real da infraestrutura municipal, secretarias ativas, gestores/admins e log de auditoria de operações em tempo real.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        ITEM 6 DO EDITAL: RELATÓRIO DE ESTÁGIO
                        - Disponibilizar arquivo PDF do Relatório de Estágio atualizado
                       ========================================== */}
                    <section id="6-relatorio-estagio" className="section-relatorio-official">
                        <div className="gov-container">
                            <div className="dossie-box">
                                <div className="dossie-left">
                                    <span className="dossie-tag">ESTRUTURA OBRIGATÓRIA 6 • RELATÓRIO DE ESTÁGIO</span>
                                    <h2 className="dossie-title">
                                        Arquivo PDF do Relatório de Estágio Atualizado.
                                    </h2>
                                    <p className="dossie-summary">
                                        Em conformidade com a avaliação bimestral da UniFil, disponibiliza-se abaixo o documento formal
                                        contendo a descrição de todas as atividades desenvolvidas ao longo do bimestre, evidências técnicas
                                        e validação das horas de estágio.
                                    </p>
                                    <div className="dossie-points">
                                        <span><Icon name="check" size={14} /> Atividades Atualizadas até 14/09</span>
                                        <span><Icon name="check" size={14} /> Assinatura do Supervisor & Aluno</span>
                                        <span><Icon name="check" size={14} /> Acesso Aberto Sem Solicitação de Permissão</span>
                                    </div>
                                </div>

                                <div className="dossie-right">
                                    <div className="dossie-meta-card">
                                        <span className="meta-card-title">DOCUMENTO OFICIAL DE ESTÁGIO</span>
                                        <div className="meta-card-row">
                                            <span>Documento:</span>
                                            <strong className="font-mono">Relatório de Estágio — Samir</strong>
                                        </div>
                                        <div className="meta-card-row">
                                            <span>Plataforma:</span>
                                            <strong>Google Docs Oficial (Nuvem)</strong>
                                        </div>
                                        <div className="meta-card-row">
                                            <span>Status da Entrega:</span>
                                            <strong className="text-green">Homologado & Atestado</strong>
                                        </div>
                                        <div className="meta-card-row">
                                            <span>Data Limite:</span>
                                            <strong>14/09 (Prazo Cumprido)</strong>
                                        </div>

                                        <div className="dossie-btn-stack">
                                            <a
                                                href="https://docs.google.com/document/d/1ApLJZ0blZtzXAySBunq6blOxDx_I1j7l/edit?usp=sharing&ouid=101647894565829657235&rtpof=true&sd=true"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-gov primary full-w"
                                            >
                                                <Icon name="external" size={15} />
                                                <span>Acessar Relatório no Google Docs</span>
                                            </a>
                                            <a
                                                href="https://docs.google.com/document/d/1ApLJZ0blZtzXAySBunq6blOxDx_I1j7l/export?format=pdf"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="btn-gov outline full-w"
                                            >
                                                <Icon name="download" size={15} />
                                                <span>Baixar Cópia em PDF</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        ITEM 7 DO EDITAL: IDENTIFICAÇÃO DO ALUNO
                        - Nome completo
                        - Matrícula
                        - Nome do professor orientador
                       ========================================== */}
                    <section id="7-identificacao-aluno" className="section-identificacao-aluno">
                        <div className="gov-container">
                            <div className="util-header">
                                <span className="util-kicker">ESTRUTURA OBRIGATÓRIA 7 / IDENTIFICAÇÃO DO ALUNO</span>
                                <h2 className="util-title">
                                    Identificação Acadêmica do Discente & Orientador.
                                </h2>
                                <p className="util-lead">
                                    Dados obrigatórios para homologação da nota bimestral no Centro Universitário Filadélfia (UniFil).
                                </p>
                            </div>

                            <div className="aluno-id-card-hard">
                                <div className="aluno-card-header">
                                    <div className="aluno-badge-seal">
                                        <Icon name="shield" size={24} />
                                    </div>
                                    <div>
                                        <span className="unifil-label">CENTRO UNIVERSITÁRIO FILADÉLFIA — UNIFIL</span>
                                        <h3 className="aluno-card-title">Ficha de Identificação do Estagiário</h3>
                                    </div>
                                </div>

                                <div className="aluno-details-grid">
                                    <div className="aluno-detail-item highlight">
                                        <span className="detail-k">NOME COMPLETO DO ALUNO:</span>
                                        <strong className="detail-v text-blue">Samir Chehade</strong>
                                        <span className="detail-sub">Discente de Estágio Supervisionado</span>
                                    </div>

                                    <div className="aluno-detail-item">
                                        <span className="detail-k">MATRÍCULA INSTITUCIONAL:</span>
                                        <strong className="detail-v font-mono">241072132</strong>
                                        <span className="detail-sub">Registro Acadêmico Ativo</span>
                                    </div>

                                    <div className="aluno-detail-item">
                                        <span className="detail-k">PROFESSOR ORIENTADOR:</span>
                                        <strong className="detail-v">Prof. Luiz Felipe Gonsalves Silva</strong>
                                        <span className="detail-sub">Docente Responsável pela Avaliação</span>
                                    </div>

                                    <div className="aluno-detail-item">
                                        <span className="detail-k">DISCIPLINA / CURSO:</span>
                                        <strong className="detail-v">Engenharia de Software / Estágio</strong>
                                        <span className="detail-sub">Avaliação Bimestral (Valor: 10,0 Pontos)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/* ==========================================
                    MODAL DE DIAGRAMAS EXPANDIDOS (UML)
                   ========================================== */}
                {activeDiagram && (
                    <div className="gov-modal-backdrop" onClick={() => setActiveDiagram(null)}>
                        <div className="gov-modal-card" onClick={(e) => e.stopPropagation()}>
                            <div className="gov-modal-header">
                                <div>
                                    <span className="modal-kicker font-mono">DIAGRAMA OFICIAL • {activeDiagram.type}</span>
                                    <h3 className="modal-heading">{activeDiagram.title}</h3>
                                </div>
                                <button
                                    type="button"
                                    className="btn-close-modal"
                                    onClick={() => setActiveDiagram(null)}
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="gov-modal-body">
                                <p className="modal-desc">{activeDiagram.description}</p>

                                {/* Imagem real do diagrama em tamanho completo */}
                                <div className="modal-diagram-img-wrap">
                                    <img
                                        src={activeDiagram.imagePath}
                                        alt={activeDiagram.title}
                                        className="modal-diagram-img"
                                    />
                                </div>

                            </div>

                            <div className="gov-modal-footer">
                                <button
                                    type="button"
                                    className="btn-gov outline"
                                    onClick={() => setActiveDiagram(null)}
                                >
                                    Fechar Janela
                                </button>
                                <a
                                    href={activeDiagram.imagePath}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-gov primary"
                                >
                                    <Icon name="external" size={14} />
                                    <span>Abrir Imagem em Alta Resolução</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* ==========================================
                    MODAL DE VÍDEO DEMONSTRATIVO (PLAY REAL)
                   ========================================== */}
                {activeVideoModal && (
                    <div className="gov-modal-backdrop" onClick={() => setActiveVideoModal(null)}>
                        <div className="gov-modal-card video-modal" onClick={(e) => e.stopPropagation()}>
                            <div className="gov-modal-header">
                                <div>
                                    <span className="modal-kicker font-mono">EVIDÊNCIA DE FUNCIONAMENTO • AXISGOV</span>
                                    <h3 className="modal-heading">{activeVideoModal.title}</h3>
                                </div>
                                <button
                                    type="button"
                                    className="btn-close-modal"
                                    onClick={() => setActiveVideoModal(null)}
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="gov-modal-body" style={{ padding: 0, background: "#000" }}>
                                <video
                                    src={activeVideoModal.src}
                                    controls
                                    autoPlay
                                    style={{
                                        width: "100%",
                                        maxHeight: "65vh",
                                        display: "block",
                                        background: "#081325",
                                    }}
                                />
                                <div style={{ padding: "16px 20px", background: "#ffffff" }}>
                                    <p style={{ margin: 0, color: "var(--gov-text)", fontSize: "14px", lineHeight: "1.5" }}>
                                        {activeVideoModal.desc}
                                    </p>
                                </div>
                            </div>

                            <div className="gov-modal-footer">
                                <button
                                    type="button"
                                    className="btn-gov outline"
                                    onClick={() => setActiveVideoModal(null)}
                                >
                                    Fechar
                                </button>
                                <a
                                    href={activeVideoModal.src}
                                    download
                                    className="btn-gov primary"
                                >
                                    <Icon name="download" size={14} />
                                    <span>Baixar Arquivo MP4</span>
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {/* ==========================================
                    RODAPÉ INSTITUCIONAL DE ALTO PESO
                   ========================================== */}
                <footer className="gov-footer">
                    <div className="gov-container">
                        <div className="gov-footer-grid">
                            <div className="footer-col-brand">
                                <div className="gov-brand white">
                                    <div className="gov-brand-icon">
                                        <Icon name="shield" size={18} />
                                    </div>
                                    <div className="gov-brand-text">
                                        <span className="brand-name">
                                            Axis<strong>Gov</strong>
                                        </span>
                                        <span className="brand-tagline">PORTFÓLIO DE ESTÁGIO • UNIFIL</span>
                                    </div>
                                </div>
                                <p className="footer-lead-text">
                                    Avaliação Bimestral da disciplina de Estágio Supervisionado em Engenharia de Software.
                                    Desenvolvido por <strong>Samir Chehade</strong> sob orientação docente da UniFil.
                                </p>
                                <div className="footer-legal-badge">
                                    <span>ENTREGA OFICIAL DE 14/09 • TODOS OS 7 ITENS DO EDITAL CUMPRIDOS</span>
                                </div>
                            </div>

                            <div className="footer-col-nav">
                                <h5>Módulos do Sistema</h5>
                                <ul>
                                    <li><a href="#3-casos-e-cronograma">UC01 — Autenticação & RBAC</a></li>
                                    <li><a href="#3-casos-e-cronograma">UC02 — Painel Fiscal & LRF</a></li>
                                    <li><a href="#3-casos-e-cronograma">UC03 — Tombamento de Bens</a></li>
                                    <li><a href="#3-casos-e-cronograma">UC04 — Almoxarifado Central</a></li>
                                </ul>
                            </div>

                            <div className="footer-col-nav">
                                <h5>Documentação & Diagramas</h5>
                                <ul>
                                    <li><a href="#4-documentacao">Diagrama de Classes</a></li>
                                    <li><a href="#4-documentacao">Diagramas de Sequência</a></li>
                                    <li><a href="#4-documentacao">Diagramas de Estados</a></li>
                                    <li><a href="#4-documentacao">Diagrama DER (PostgreSQL)</a></li>
                                </ul>
                            </div>

                            <div className="footer-col-nav">
                                <h5>Identificação do Discente</h5>
                                <p className="footer-meta-p">
                                    Aluno: <strong>Samir Chehade</strong><br />
                                    Matrícula: <strong>2024-UNIFIL-ENG</strong><br />
                                    Instituição: <strong>UniFil</strong><br />
                                    Repositório: <strong>PortifolioAxisGov</strong>
                                </p>
                            </div>
                        </div>

                        <div className="footer-legal-bar">
                            <p>© {new Date().getFullYear()} AxisGov — Avaliação Bimestral UniFil. Todos os direitos reservados.</p>
                            <div className="footer-legal-tags">
                                <span>Padrão Institucional</span>
                                <span>Rubrica 10,0 Pontos</span>
                                <span>Prazo 14/09</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {/* ==========================================
                CSS COMPLETO: DESIGN SYSTEM INSTITUCIONAL
               ========================================== */}
            <style>{`
                /* ==================== TOKENS ==================== */
                :root {
                    --gov-navy-950: #050b16;
                    --gov-navy-900: #081325;
                    --gov-navy-800: #0e1e38;
                    --gov-navy-700: #142a4d;
                    --gov-blue-600: #1d4ed8;
                    --gov-blue-500: #2563eb;
                    --gov-blue-400: #3b82f6;
                    --gov-emerald-500: #059669;
                    --gov-amber-500: #d97706;
                    --gov-text-primary: #0f172a;
                    --gov-text-secondary: #475569;
                    --gov-text-muted: #64748b;
                    --gov-bg-light: #ffffff;
                    --gov-bg-soft: #f8fafc;
                    --gov-border-light: #e2e8f0;
                    --gov-border-strong: #cbd5e1;
                    --gov-shadow-hard: 16px 18px 0px rgba(8, 19, 37, 0.95);
                    --gov-shadow-sm: 8px 10px 0px rgba(8, 19, 37, 0.9);
                }

                * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                }

                html {
                    scroll-behavior: smooth;
                    background: var(--gov-bg-light);
                }

                body {
                    font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    color: var(--gov-text-primary);
                    background: var(--gov-bg-light);
                    line-height: 1.6;
                    -webkit-font-smoothing: antialiased;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .font-mono {
                    font-family: 'JetBrains Mono', monospace;
                }

                .font-bold { font-weight: 700; }
                .text-muted { color: var(--gov-text-muted); }
                .text-blue { color: var(--gov-blue-600); }
                .text-green { color: var(--gov-emerald-500); }
                .text-amber { color: var(--gov-amber-500); }
                .text-xs { font-size: 11px; }

                .gov-container {
                    width: min(1260px, calc(100% - 48px));
                    margin: 0 auto;
                }

                /* ==================== BARRA INSTITUCIONAL UNIFIL ==================== */
                .gov-topbar {
                    background: #040913;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    color: #94a3b8;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.04em;
                    height: 38px;
                }

                .topbar-flex {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                }

                .gov-topbar-left {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .gov-flag-mark {
                    width: 12px;
                    height: 9px;
                    background: linear-gradient(180deg, #059669 33%, #f59e0b 33% 66%, #2563eb 66%);
                    display: inline-block;
                    border-radius: 1px;
                }

                .gov-topbar-title strong {
                    color: #ffffff;
                }

                .gov-topbar-right {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .topbar-link:hover {
                    color: #fff;
                }

                .topbar-sep {
                    color: #475569;
                }

                /* ==================== HEADER ==================== */
                .gov-header {
                    background: #ffffff;
                    border-bottom: 2px solid var(--gov-navy-900);
                    height: 74px;
                    position: sticky;
                    top: 0;
                    z-index: 100;
                }

                .header-flex {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 100%;
                }

                .gov-brand {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .gov-brand.white .brand-name {
                    color: #ffffff;
                }

                .gov-brand.white .brand-tagline {
                    color: #94a3b8;
                }

                .gov-brand-icon {
                    width: 38px;
                    height: 38px;
                    background: var(--gov-navy-900);
                    color: #ffffff;
                    display: grid;
                    place-items: center;
                    border-radius: 4px;
                }

                .gov-brand-text {
                    display: flex;
                    flex-direction: column;
                }

                .brand-name {
                    font-size: 20px;
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    color: var(--gov-navy-900);
                    line-height: 1.1;
                }

                .brand-name strong {
                    color: var(--gov-blue-600);
                }

                .brand-tagline {
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    color: var(--gov-text-muted);
                }

                .gov-nav {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                }

                .gov-nav-link {
                    font-size: 12px;
                    font-weight: 700;
                    color: var(--gov-navy-900);
                    transition: color 0.15s ease;
                }

                .gov-nav-link:hover {
                    color: var(--gov-blue-600);
                }

                .gov-nav-btn {
                    padding: 9px 16px;
                    background: var(--gov-navy-900);
                    color: #ffffff;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.04em;
                    border-radius: 3px;
                    transition: background 0.15s ease;
                }

                .gov-nav-btn:hover {
                    background: var(--gov-blue-600);
                }

                /* ==================== HERO (ITEM 1 DO EDITAL) ==================== */
                .hero-institutional {
                    position: relative;
                    background: var(--gov-navy-900);
                    color: #ffffff;
                    padding: 85px 0 100px;
                    overflow: hidden;
                    border-bottom: 3px solid var(--gov-blue-600);
                }

                .hero-blueprint-grid {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.035) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
                    background-size: 40px 40px;
                    opacity: 0.7;
                }

                .hero-topographic-lines {
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    background: radial-gradient(circle at 80% 30%, rgba(37, 99, 235, 0.18) 0%, transparent 60%);
                    opacity: 0.8;
                }

                .hero-code-watermark {
                    position: absolute;
                    pointer-events: none;
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.05);
                    line-height: 1.6;
                    white-space: pre;
                    z-index: 0;
                }

                .hero-code-watermark.left { left: 2%; top: 15%; }
                .hero-code-watermark.right { right: 2%; bottom: 10%; }

                .hero-inner-grid {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: 1.05fr 1.15fr;
                    gap: 60px;
                    align-items: center;
                }

                .hero-seal-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 14px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 2px;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    color: #93c5fd;
                    margin-bottom: 20px;
                }

                .seal-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #38bdf8;
                    box-shadow: 0 0 8px #38bdf8;
                }

                .hero-title {
                    font-size: clamp(30px, 3.8vw, 48px);
                    font-weight: 900;
                    line-height: 1.15;
                    letter-spacing: -0.035em;
                    margin-bottom: 20px;
                    color: #ffffff;
                }

                .hero-objective-box {
                    background: rgba(37, 99, 235, 0.15);
                    border-left: 4px solid var(--gov-blue-400);
                    padding: 16px 20px;
                    margin-bottom: 22px;
                    border-radius: 2px;
                }

                .obj-tag {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.12em;
                    color: #93c5fd;
                    margin-bottom: 6px;
                }

                .hero-objective-box p {
                    font-size: 14px;
                    line-height: 1.7;
                    color: #f1f5f9;
                }

                .hero-lead {
                    font-size: 14px;
                    line-height: 1.75;
                    color: #cbd5e1;
                    margin-bottom: 30px;
                }

                .hero-lead strong {
                    color: #ffffff;
                }

                .hero-cta-actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }

                .btn-gov {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 20px;
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.04em;
                    cursor: pointer;
                    border-radius: 3px;
                    transition: all 0.2s ease;
                }

                .btn-gov.primary {
                    background: var(--gov-blue-600);
                    color: #ffffff;
                    border: 2px solid var(--gov-blue-600);
                    box-shadow: 4px 6px 0px rgba(0, 0, 0, 0.4);
                }

                .btn-gov.primary:hover {
                    background: #1e40af;
                    transform: translateY(-2px);
                    box-shadow: 6px 8px 0px rgba(0, 0, 0, 0.5);
                }

                .btn-gov.outline {
                    background: transparent;
                    color: #ffffff;
                    border: 2px solid rgba(255, 255, 255, 0.3);
                }

                .btn-gov.outline:hover {
                    background: rgba(255, 255, 255, 0.08);
                    border-color: #ffffff;
                }

                .btn-gov.full-w {
                    width: 100%;
                    justify-content: center;
                }

                /* ISOMÉTRICO */
                .hero-isometric-wrapper {
                    perspective: 1600px;
                }

                .isometric-stage {
                    transform: perspective(1400px) rotateY(-12deg) rotateX(8deg);
                    transition: transform 0.5s ease;
                }

                .isometric-stage:hover {
                    transform: perspective(1400px) rotateY(-6deg) rotateX(4deg);
                }

                .browser-frame-iso {
                    background: #ffffff;
                    border: 2px solid #000000;
                    box-shadow: 22px 24px 0px rgba(0, 0, 0, 0.7);
                    border-radius: 4px;
                    overflow: hidden;
                    color: var(--gov-text-primary);
                }

                .browser-header-iso {
                    background: #0f172a;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 16px;
                    border-bottom: 2px solid #000000;
                }

                .browser-traffic-dots {
                    display: flex;
                    gap: 6px;
                }

                .traffic-dot {
                    width: 9px;
                    height: 9px;
                    border-radius: 50%;
                }

                .traffic-dot.red { background: #ef4444; }
                .traffic-dot.yellow { background: #f59e0b; }
                .traffic-dot.green { background: #10b981; }

                .browser-url-iso {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    padding: 4px 14px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.15);
                    font-size: 10px;
                    font-family: 'JetBrains Mono', monospace;
                    color: #94a3b8;
                    border-radius: 2px;
                }

                .browser-status-iso {
                    font-size: 9px;
                    font-weight: 800;
                    color: #10b981;
                    letter-spacing: 0.08em;
                }

                .browser-body-iso {
                    padding: 0;
                    background: #0a1226;
                    overflow: hidden;
                }

                .real-image-body {
                    padding: 0;
                    background: #0a1226;
                    overflow: hidden;
                    display: block;
                }

                .real-system-screenshot {
                    width: 100%;
                    height: auto;
                    display: block;
                    object-fit: cover;
                    object-position: top left;
                }

                .iso-kpi-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 12px;
                    margin-bottom: 18px;
                }

                .iso-kpi-card {
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 14px;
                    border-radius: 2px;
                }

                .iso-kpi-card.highlight {
                    border-top: 3px solid var(--gov-blue-600);
                }

                .iso-kpi-tag {
                    display: block;
                    font-size: 9px;
                    font-weight: 800;
                    color: var(--gov-text-muted);
                    letter-spacing: 0.06em;
                    margin-bottom: 4px;
                }

                .iso-kpi-val {
                    display: block;
                    font-size: 18px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    letter-spacing: -0.02em;
                }

                .iso-kpi-trend {
                    font-size: 10px;
                    color: var(--gov-emerald-500);
                    font-weight: 700;
                }

                .iso-table-mock {
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    margin-bottom: 14px;
                }

                .iso-tr {
                    display: grid;
                    grid-template-columns: 140px 1.4fr 1fr 100px;
                    padding: 10px 14px;
                    border-bottom: 1px solid var(--gov-border-light);
                    font-size: 11px;
                    align-items: center;
                }

                .iso-tr:last-child {
                    border-bottom: none;
                }

                .iso-th {
                    background: #f1f5f9;
                    font-size: 9px;
                    font-weight: 800;
                    color: var(--gov-text-muted);
                    letter-spacing: 0.08em;
                }

                .badge-pill {
                    display: inline-block;
                    padding: 2px 6px;
                    border-radius: 2px;
                    font-size: 9px;
                    font-weight: 800;
                    text-align: center;
                }

                .badge-pill.green { background: #d1fae5; color: #065f46; }
                .badge-pill.blue { background: #dbeafe; color: #1e40af; }

                .iso-footer-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 6px;
                }

                .iso-latency-pill {
                    font-size: 10px;
                    font-family: 'JetBrains Mono', monospace;
                    font-weight: 700;
                    color: var(--gov-emerald-500);
                }

                /* ==================== ITEM 2: SOBRE O PROJETO ==================== */
                .section-utilitarian {
                    padding: 90px 0;
                    background: #ffffff;
                    border-bottom: 1px solid var(--gov-border-light);
                }

                .util-header {
                    margin-bottom: 50px;
                    max-width: 900px;
                }

                .util-kicker {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.18em;
                    color: var(--gov-blue-600);
                    margin-bottom: 12px;
                }

                .util-title {
                    font-size: clamp(28px, 3.6vw, 44px);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1.18;
                    color: var(--gov-navy-900);
                    margin-bottom: 16px;
                }

                .util-lead {
                    font-size: 15px;
                    line-height: 1.75;
                    color: var(--gov-text-secondary);
                }

                .section-inner-heading {
                    font-size: 20px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    margin-bottom: 24px;
                    letter-spacing: -0.02em;
                }

                .problem-statement-box {
                    background: #f8fafc;
                    border: 2px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-sm);
                    padding: 30px;
                    margin-bottom: 60px;
                }

                .problem-header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 20px;
                }

                .problem-header h3 {
                    font-size: 18px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                }

                .problem-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 24px;
                }

                .problem-card {
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 18px;
                }

                .problem-card h4 {
                    font-size: 14px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    margin-bottom: 8px;
                }

                .problem-card p {
                    font-size: 13px;
                    color: var(--gov-text-secondary);
                    line-height: 1.65;
                }

                .tech-section-wrapper {
                    margin-bottom: 60px;
                }

                .brutalist-tech-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                }

                .brutalist-tech-item {
                    position: relative;
                    padding-top: 20px;
                    background: #ffffff;
                }

                .tech-solid-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: var(--gov-navy-900);
                }

                .tech-category {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.14em;
                    color: var(--gov-blue-600);
                    margin-bottom: 8px;
                }

                .tech-main-name {
                    font-size: 22px;
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    color: var(--gov-navy-900);
                    margin-bottom: 10px;
                }

                .tech-description {
                    font-size: 13px;
                    line-height: 1.65;
                    color: var(--gov-text-secondary);
                }

                .arch-summary-box {
                    padding-top: 20px;
                }

                .arch-summary-content p {
                    font-size: 15px;
                    color: var(--gov-text-secondary);
                    margin-bottom: 24px;
                }

                .arch-layers-flow {
                    display: grid;
                    grid-template-columns: 1fr auto 1fr auto 1fr;
                    gap: 16px;
                    align-items: center;
                }

                .flow-step {
                    background: #f8fafc;
                    border: 2px solid var(--gov-navy-900);
                    padding: 20px;
                    border-radius: 2px;
                }

                .flow-num {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.12em;
                    color: var(--gov-blue-600);
                    margin-bottom: 4px;
                }

                .flow-step strong {
                    display: block;
                    font-size: 15px;
                    color: var(--gov-navy-900);
                    margin-bottom: 8px;
                }

                .flow-step p {
                    font-size: 12px;
                    color: var(--gov-text-secondary);
                    line-height: 1.6;
                    margin: 0;
                }

                .flow-arrow {
                    font-size: 22px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    text-align: center;
                }

                /* ==================== ITEM 3: CASOS DE USO & CRONOGRAMA ==================== */
                .section-sticky-cases {
                    padding: 90px 0;
                    background: var(--gov-bg-soft);
                    border-bottom: 1px solid var(--gov-border-strong);
                }

                .sticky-cases-header {
                    margin-bottom: 60px;
                    max-width: 900px;
                }

                .sticky-split-layout {
                    display: grid;
                    grid-template-columns: 360px 1fr;
                    gap: 60px;
                    align-items: start;
                    margin-bottom: 90px;
                }

                .sticky-nav-column {
                    position: sticky;
                    top: 100px;
                }

                .sticky-nav-inner {
                    padding-right: 10px;
                }

                .sticky-instruction {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.15em;
                    color: var(--gov-text-muted);
                    margin-bottom: 18px;
                }

                .sticky-links-list {
                    display: grid;
                    gap: 12px;
                }

                .sticky-link-btn {
                    display: flex;
                    align-items: flex-start;
                    gap: 14px;
                    text-align: left;
                    background: transparent;
                    border: none;
                    border-left: 3px solid #cbd5e1;
                    padding: 10px 0 10px 16px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .sticky-link-btn:hover {
                    border-left-color: var(--gov-navy-900);
                }

                .sticky-link-btn.active {
                    border-left-color: var(--gov-blue-600);
                    background: rgba(37, 99, 235, 0.04);
                }

                .btn-num {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 12px;
                    font-weight: 900;
                    color: var(--gov-text-muted);
                }

                .sticky-link-btn.active .btn-num {
                    color: var(--gov-blue-600);
                }

                .btn-text {
                    display: flex;
                    flex-direction: column;
                }

                .btn-cat {
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    color: var(--gov-text-muted);
                    margin-bottom: 2px;
                }

                .btn-title {
                    font-size: 16px;
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    color: var(--gov-text-secondary);
                    line-height: 1.25;
                }

                .sticky-link-btn.active .btn-title {
                    color: var(--gov-navy-900);
                }

                .sticky-screens-column {
                    display: grid;
                    gap: 24px;
                }

                .sticky-screen-block {
                    scroll-margin-top: 110px;
                    background: #ffffff;
                    border: 2px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-sm);
                    padding: 28px 32px;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .sticky-screen-block:hover {
                    transform: translate(-2px, -2px);
                    box-shadow: var(--gov-shadow-hard);
                }

                .screen-detail-header {
                    margin-bottom: 20px;
                }

                .screen-tag-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 8px;
                }

                .screen-num {
                    font-size: 11px;
                    font-weight: 900;
                    color: var(--gov-blue-600);
                }

                .screen-label {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    color: var(--gov-text-muted);
                }

                .screen-title {
                    font-size: clamp(22px, 2.5vw, 32px);
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    color: var(--gov-navy-900);
                    margin-bottom: 10px;
                }

                .screen-desc {
                    font-size: 14px;
                    line-height: 1.7;
                    color: var(--gov-text-secondary);
                    margin-bottom: 12px;
                }

                .screen-regulation {
                    display: inline-flex;
                    align-items: center;
                    gap: 7px;
                    font-size: 11px;
                    font-weight: 800;
                    color: var(--gov-navy-800);
                    background: #e2e8f0;
                    padding: 5px 12px;
                    border-radius: 2px;
                }

                .browser-frame-hard {
                    background: #ffffff;
                    border: 2px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-hard);
                    border-radius: 3px;
                    overflow: hidden;
                    margin-bottom: 20px;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .browser-frame-hard:hover {
                    transform: translate(-3px, -3px);
                    box-shadow: 20px 22px 0px rgba(8, 19, 37, 0.98);
                }

                .browser-bar-minimal {
                    height: 38px;
                    background: #0f172a;
                    border-bottom: 2px solid var(--gov-navy-900);
                    display: flex;
                    align-items: center;
                    padding: 0 14px;
                    gap: 12px;
                }

                .bar-dots {
                    display: flex;
                    gap: 5px;
                }

                .bar-dots span {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #334155;
                }

                .bar-address {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 10px;
                    color: #94a3b8;
                    background: rgba(255, 255, 255, 0.08);
                    padding: 3px 12px;
                    border-radius: 2px;
                }

                .browser-content-wrap {
                    background: #ffffff;
                }

                .sys-screen {
                    padding: 24px;
                    background: #f8fafc;
                }

                .dash-top-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 18px;
                    border-bottom: 1px solid var(--gov-border-strong);
                    padding-bottom: 12px;
                }

                .dash-pill {
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    color: var(--gov-blue-600);
                    display: block;
                    margin-bottom: 2px;
                }

                .dash-heading h4 {
                    font-size: 15px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                }

                .dash-filter {
                    font-size: 11px;
                    font-weight: 800;
                    color: var(--gov-text-muted);
                    background: #e2e8f0;
                    padding: 4px 10px;
                    border-radius: 2px;
                }

                .dash-kpi-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                    margin-bottom: 18px;
                }

                .dash-stat {
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 14px;
                }

                .stat-label {
                    display: block;
                    font-size: 10px;
                    font-weight: 700;
                    color: var(--gov-text-muted);
                    margin-bottom: 4px;
                }

                .stat-val {
                    display: block;
                    font-size: 18px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    letter-spacing: -0.02em;
                }

                .stat-sub {
                    font-size: 10px;
                    color: var(--gov-text-muted);
                }

                .dash-table-wrap, .pat-table-wrap {
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                }

                .dash-table-head {
                    display: grid;
                    grid-template-columns: 2fr 1.2fr 1.2fr 1fr;
                    padding: 10px 14px;
                    background: #f1f5f9;
                    border-bottom: 1px solid var(--gov-border-strong);
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    color: var(--gov-text-muted);
                }

                .dash-table-row {
                    display: grid;
                    grid-template-columns: 2fr 1.2fr 1.2fr 1fr;
                    padding: 12px 14px;
                    border-bottom: 1px solid var(--gov-border-light);
                    font-size: 12px;
                    align-items: center;
                }

                .dash-table-row:last-child {
                    border-bottom: none;
                }

                .table-badge {
                    display: inline-block;
                    padding: 2px 7px;
                    font-size: 9px;
                    font-weight: 800;
                    border-radius: 2px;
                }

                .table-badge.green { background: #d1fae5; color: #065f46; }
                .table-badge.amber { background: #fef3c7; color: #92400e; }
                .table-badge.blue { background: #dbeafe; color: #1e40af; }

                /* AUTH */
                .auth-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 24px;
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 24px;
                }

                .auth-panel-left {
                    border-right: 1px solid var(--gov-border-light);
                    padding-right: 20px;
                }

                .gov-seal {
                    color: var(--gov-blue-600);
                    margin-bottom: 12px;
                }

                .auth-panel-left h3 {
                    font-size: 18px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    margin-bottom: 8px;
                }

                .auth-panel-left p {
                    font-size: 12px;
                    color: var(--gov-text-muted);
                    line-height: 1.6;
                    margin-bottom: 18px;
                }

                .cert-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    font-size: 10px;
                    font-weight: 800;
                    color: var(--gov-emerald-500);
                    background: #ecfdf5;
                    padding: 4px 10px;
                    border: 1px solid #a7f3d0;
                }

                .cert-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: var(--gov-emerald-500);
                }

                .mock-label {
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    color: var(--gov-blue-600);
                }

                .mock-title {
                    font-size: 15px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    margin-bottom: 12px;
                }

                .mock-field {
                    margin-bottom: 10px;
                }

                .mock-field label {
                    display: block;
                    font-size: 10px;
                    font-weight: 700;
                    color: var(--gov-text-muted);
                    margin-bottom: 4px;
                }

                .mock-input {
                    background: #f8fafc;
                    border: 1px solid var(--gov-border-strong);
                    padding: 7px 12px;
                    font-size: 12px;
                    font-family: 'JetBrains Mono', monospace;
                    color: var(--gov-navy-900);
                }

                .mock-input.code-dots {
                    letter-spacing: 4px;
                    color: var(--gov-blue-600);
                }

                .mock-btn-row {
                    display: flex;
                    gap: 8px;
                    margin-top: 12px;
                }

                .mock-btn {
                    padding: 8px 12px;
                    font-size: 11px;
                    font-weight: 800;
                    text-align: center;
                    border-radius: 2px;
                    cursor: pointer;
                }

                .mock-btn.primary { background: var(--gov-navy-900); color: #ffffff; }
                .mock-btn.secondary { background: #e2e8f0; color: var(--gov-navy-900); }

                .mock-footer-sec {
                    margin-top: 12px;
                    font-size: 9px;
                    font-family: 'JetBrains Mono', monospace;
                    color: var(--gov-text-muted);
                }

                /* ESTOQUE */
                .est-grid-cards {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                }

                .est-card-item {
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 14px;
                }

                .est-code {
                    font-size: 10px;
                    font-weight: 800;
                    color: var(--gov-blue-600);
                    display: block;
                    margin-bottom: 4px;
                }

                .est-card-item h5 {
                    font-size: 13px;
                    font-weight: 800;
                    color: var(--gov-navy-900);
                    margin-bottom: 10px;
                    line-height: 1.35;
                }

                .est-bar-wrap {
                    height: 6px;
                    background: #e2e8f0;
                    border-radius: 2px;
                    margin-bottom: 8px;
                    overflow: hidden;
                }

                .est-bar-fill { height: 100%; background: var(--gov-emerald-500); }
                .est-bar-fill.alert { background: var(--gov-amber-500); }

                .est-meta-row {
                    display: flex;
                    justify-content: space-between;
                    font-size: 10px;
                }

                .screen-metrics-strip {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 14px 18px;
                }

                .screen-metric {
                    display: flex;
                    flex-direction: column;
                }

                .metric-k {
                    font-size: 10px;
                    font-weight: 700;
                    color: var(--gov-text-muted);
                    margin-bottom: 2px;
                }

                .metric-v {
                    font-size: 14px;
                    color: var(--gov-navy-900);
                }

                /* TABELA DE CRONOGRAMA OFICIAL (ITEM 3.2 DO EDITAL) */
                .schedule-table-section {
                    background: #ffffff;
                    border: 2px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-hard);
                    padding: 34px;
                    margin-top: 40px;
                }

                .schedule-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    margin-bottom: 26px;
                    border-bottom: 2px solid var(--gov-navy-900);
                    padding-bottom: 18px;
                }

                .table-badge-gov {
                    display: inline-block;
                    font-size: 9px;
                    font-weight: 900;
                    letter-spacing: 0.14em;
                    color: #ffffff;
                    background: var(--gov-blue-600);
                    padding: 3px 8px;
                    border-radius: 2px;
                    margin-bottom: 8px;
                }

                .schedule-title {
                    font-size: 22px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    letter-spacing: -0.02em;
                    margin-bottom: 4px;
                }

                .schedule-subtitle {
                    font-size: 13px;
                    color: var(--gov-text-secondary);
                }

                .status-period-pill {
                    font-size: 11px;
                    font-weight: 800;
                    color: var(--gov-navy-900);
                    background: #e2e8f0;
                    padding: 6px 14px;
                    border: 1px solid var(--gov-border-strong);
                }

                .gov-table-container {
                    overflow-x: auto;
                }

                .official-gov-table {
                    width: 100%;
                    border-collapse: collapse;
                    text-align: left;
                    font-size: 12px;
                }

                .official-gov-table th {
                    background: #0f172a;
                    color: #ffffff;
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    padding: 12px 14px;
                    border: 1px solid #000000;
                }

                .official-gov-table td {
                    padding: 12px 14px;
                    border: 1px solid var(--gov-border-strong);
                    color: var(--gov-text-primary);
                }

                .official-gov-table tr:nth-child(even) {
                    background: #f8fafc;
                }

                .status-pill-table {
                    display: inline-block;
                    padding: 3px 8px;
                    border-radius: 2px;
                    font-size: 10px;
                    font-weight: 800;
                }

                .status-pill-table.done { background: #d1fae5; color: #065f46; }
                .status-pill-table.wip { background: #dbeafe; color: #1e40af; }
                .status-pill-table.plan { background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; }

                /* ==================== ITEM 4: DOCUMENTAÇÃO & DIAGRAMAS ==================== */
                .section-diagrams-official {
                    padding: 90px 0;
                    background: #ffffff;
                    border-bottom: 1px solid var(--gov-border-strong);
                }

                .diagrams-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 32px;
                }

                .diagram-card-gov {
                    border: 2px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-sm);
                    padding: 24px;
                    background: #ffffff;
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .diagram-card-gov:hover {
                    transform: translate(-2px, -2px);
                    box-shadow: var(--gov-shadow-hard);
                }

                .diag-card-top {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 12px;
                }

                .diag-type-badge {
                    font-size: 10px;
                    font-weight: 800;
                    color: var(--gov-blue-600);
                    background: #eff6ff;
                    border: 1px solid #bfdbfe;
                    padding: 3px 8px;
                    border-radius: 2px;
                }

                .btn-open-diag {
                    display: inline-flex;
                    align-items: center;
                    gap: 5px;
                    background: none;
                    border: 1px solid var(--gov-border-strong);
                    padding: 4px 10px;
                    font-size: 10px;
                    font-weight: 700;
                    color: var(--gov-text-muted);
                    cursor: pointer;
                }

                .btn-open-diag:hover {
                    color: var(--gov-navy-900);
                    border-color: var(--gov-navy-900);
                }

                .diag-title {
                    font-size: 18px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    margin-bottom: 8px;
                }

                .diag-desc {
                    font-size: 13px;
                    color: var(--gov-text-secondary);
                    line-height: 1.6;
                    margin-bottom: 18px;
                    flex: 1;
                }

                /* ====== DIAGRAM CARD IMAGE PREVIEW ====== */
                .diag-image-preview {
                    position: relative;
                    overflow: hidden;
                    cursor: pointer;
                    border: 2px solid #1e3a5f;
                    background: #f0f4f8;
                    aspect-ratio: 16 / 9;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                }
                .diag-thumb-img {
                    display: block;
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    transition: transform 0.3s ease, filter 0.3s ease;
                }
                .diag-image-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(8, 19, 37, 0.75);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    color: #ffffff;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }
                .diag-image-preview:hover .diag-image-overlay {
                    opacity: 1;
                }
                .diag-image-preview:hover .diag-thumb-img {
                    transform: scale(1.03);
                    filter: brightness(0.7);
                }

                /* ====== CASE STUDY ACTOR BADGE ====== */
                .screen-actors-badge {
                    display: inline-block;
                    background: #1e3a5f;
                    color: #93c5fd;
                    font-size: 10px;
                    font-weight: 700;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    padding: 4px 10px;
                    border: 1px solid #2d5a9e;
                    margin-bottom: 10px;
                }

                .diag-preview-terminal {
                    background: #091222;
                    border: 1px solid #000000;
                    border-radius: 3px;
                    overflow: hidden;
                    margin-bottom: 16px;
                }

                .diag-terminal-bar {
                    background: #0f172a;
                    padding: 6px 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 10px;
                    border-bottom: 1px solid #1e293b;
                }

                .terminal-title { color: #94a3b8; }
                .terminal-status { color: #10b981; font-weight: 800; }

                .diag-code {
                    padding: 12px;
                    font-size: 11px;
                    color: #93c5fd;
                    line-height: 1.6;
                    overflow-x: auto;
                    max-height: 120px;
                }

                .diag-card-footer {
                    border-top: 1px solid var(--gov-border-light);
                    padding-top: 12px;
                }

                .link-diag-action {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    background: none;
                    border: none;
                    font-size: 12px;
                    font-weight: 800;
                    color: var(--gov-blue-600);
                    cursor: pointer;
                }

                .link-diag-action:hover {
                    text-decoration: underline;
                }

                /* ==================== ITEM 5: TELAS & VÍDEO ==================== */
                .section-interfaces-grid {
                    padding: 90px 0;
                    background: #ffffff;
                    border-bottom: 1px solid var(--gov-border-light);
                }

                .video-demonstrativo-card {
                    background: #081325;
                    color: #ffffff;
                    border: 2px solid #000000;
                    box-shadow: var(--gov-shadow-hard);
                    padding: 40px;
                    display: grid;
                    grid-template-columns: 1.2fr 1fr;
                    gap: 40px;
                    align-items: center;
                    margin-bottom: 60px;
                }

                .video-badge-tag {
                    display: inline-block;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.14em;
                    color: #93c5fd;
                    background: rgba(37, 99, 235, 0.25);
                    padding: 4px 10px;
                    border-radius: 2px;
                    margin-bottom: 12px;
                }

                .video-heading {
                    font-size: 24px;
                    font-weight: 900;
                    line-height: 1.2;
                    letter-spacing: -0.03em;
                    margin-bottom: 14px;
                }

                .video-subtext {
                    font-size: 13px;
                    line-height: 1.7;
                    color: #cbd5e1;
                    margin-bottom: 20px;
                }

                .video-features-pills {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    margin-bottom: 24px;
                    font-size: 11px;
                    font-weight: 700;
                    color: #93c5fd;
                }

                .video-action-row {
                    display: flex;
                    gap: 12px;
                }

                .video-stage-preview {
                    position: relative;
                    aspect-ratio: 16 / 9;
                    background: linear-gradient(135deg, #0f1e38 0%, #050b16 100%);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    display: grid;
                    place-items: center;
                    cursor: pointer;
                    overflow: hidden;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
                }

                .video-play-button {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: var(--gov-blue-600);
                    color: #ffffff;
                    display: grid;
                    place-items: center;
                    box-shadow: 0 0 0 10px rgba(37, 99, 235, 0.25);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .video-stage-preview:hover .video-play-button {
                    transform: scale(1.08);
                    box-shadow: 0 0 0 16px rgba(37, 99, 235, 0.35);
                }

                .video-duration-pill {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    background: rgba(0, 0, 0, 0.8);
                    color: #ffffff;
                    font-size: 10px;
                    padding: 3px 7px;
                    border-radius: 2px;
                }

                .video-caption-strip {
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    font-size: 10px;
                    color: #94a3b8;
                    background: rgba(0, 0, 0, 0.6);
                    padding: 2px 6px;
                }

                .interfaces-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 45px;
                }

                .interface-showcase-item {
                    display: flex;
                    flex-direction: column;
                }

                .interface-caption h4 {
                    font-size: 15px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    margin-bottom: 4px;
                }

                .interface-caption p {
                    font-size: 13px;
                    color: var(--gov-text-secondary);
                    line-height: 1.6;
                }

                /* ==================== ITEM 6: RELATÓRIO DE ESTÁGIO ==================== */
                .section-relatorio-official {
                    padding: 90px 0;
                    background: var(--gov-bg-soft);
                    border-bottom: 1px solid var(--gov-border-strong);
                }

                .dossie-box {
                    border: 3px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-hard);
                    display: grid;
                    grid-template-columns: 1.3fr 1fr;
                    gap: 40px;
                    padding: 45px;
                    background: #ffffff;
                }

                .dossie-tag {
                    display: inline-block;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    color: var(--gov-blue-600);
                    margin-bottom: 10px;
                }

                .dossie-title {
                    font-size: 28px;
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    color: var(--gov-navy-900);
                    margin-bottom: 14px;
                    line-height: 1.2;
                }

                .dossie-summary {
                    font-size: 14px;
                    line-height: 1.75;
                    color: var(--gov-text-secondary);
                    margin-bottom: 22px;
                }

                .dossie-points {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                    font-size: 12px;
                    font-weight: 800;
                    color: var(--gov-navy-800);
                }

                .dossie-points span {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                }

                .dossie-meta-card {
                    background: #f8fafc;
                    border: 2px solid var(--gov-border-strong);
                    padding: 24px;
                }

                .meta-card-title {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.12em;
                    color: var(--gov-text-muted);
                    margin-bottom: 16px;
                    border-bottom: 1px solid var(--gov-border-light);
                    padding-bottom: 8px;
                }

                .meta-card-row {
                    display: flex;
                    justify-content: space-between;
                    font-size: 12px;
                    margin-bottom: 10px;
                }

                .meta-card-row span {
                    color: var(--gov-text-muted);
                }

                .dossie-btn-stack {
                    display: grid;
                    gap: 10px;
                    margin-top: 20px;
                }

                /* ==================== ITEM 7: IDENTIFICAÇÃO DO ALUNO ==================== */
                .section-identificacao-aluno {
                    padding: 90px 0 100px;
                    background: #ffffff;
                }

                .aluno-id-card-hard {
                    border: 3px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-hard);
                    background: #ffffff;
                    padding: 40px;
                }

                .aluno-card-header {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    border-bottom: 2px solid var(--gov-navy-900);
                    padding-bottom: 24px;
                    margin-bottom: 28px;
                }

                .aluno-badge-seal {
                    width: 52px;
                    height: 52px;
                    background: var(--gov-navy-900);
                    color: #ffffff;
                    display: grid;
                    place-items: center;
                    border-radius: 4px;
                }

                .unifil-label {
                    display: block;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.14em;
                    color: var(--gov-blue-600);
                }

                .aluno-card-title {
                    font-size: 24px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    letter-spacing: -0.02em;
                }

                .aluno-details-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 20px;
                    margin-bottom: 30px;
                }

                .aluno-detail-item {
                    background: #f8fafc;
                    border: 1px solid var(--gov-border-strong);
                    padding: 18px;
                }

                .aluno-detail-item.highlight {
                    border-top: 4px solid var(--gov-blue-600);
                }

                .detail-k {
                    display: block;
                    font-size: 9px;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    color: var(--gov-text-muted);
                    margin-bottom: 6px;
                }

                .detail-v {
                    display: block;
                    font-size: 18px;
                    color: var(--gov-navy-900);
                    margin-bottom: 4px;
                    letter-spacing: -0.02em;
                }

                .detail-sub {
                    font-size: 11px;
                    color: var(--gov-text-muted);
                }

                .aluno-card-footer {
                    background: #ecfdf5;
                    border: 1px solid #a7f3d0;
                    padding: 16px 20px;
                }

                .aluno-rubric-compliance {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 12px;
                    color: #065f46;
                }

                /* ==================== MODAIS ==================== */
                .gov-modal-backdrop {
                    position: fixed;
                    inset: 0;
                    background: rgba(8, 19, 37, 0.85);
                    backdrop-filter: blur(8px);
                    z-index: 200;
                    display: grid;
                    place-items: center;
                    padding: 20px;
                }

                .gov-modal-card {
                    background: #ffffff;
                    border: 3px solid var(--gov-navy-900);
                    box-shadow: 20px 24px 0px rgba(0, 0, 0, 0.8);
                    width: min(1100px, 100%);
                    max-height: 90vh;
                    overflow-y: auto;
                }

                .gov-modal-card.video-modal {
                    width: min(900px, 100%);
                }

                /* ====== MODAL DIAGRAM IMAGE ====== */
                .modal-diagram-img-wrap {
                    background: #f0f4f8;
                    border: 2px solid #0f2647;
                    overflow: auto;
                    max-height: 520px;
                    display: flex;
                    align-items: flex-start;
                    justify-content: center;
                }
                .modal-diagram-img {
                    display: block;
                    max-width: 100%;
                    height: auto;
                    object-fit: contain;
                }

                .gov-modal-header {
                    background: var(--gov-navy-900);
                    color: #ffffff;
                    padding: 18px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .modal-kicker {
                    font-size: 9px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    color: #93c5fd;
                    display: block;
                    margin-bottom: 2px;
                }

                .modal-heading {
                    font-size: 17px;
                    font-weight: 900;
                }

                .btn-close-modal {
                    background: none;
                    border: none;
                    color: #ffffff;
                    font-size: 18px;
                    font-weight: 900;
                    cursor: pointer;
                }

                .gov-modal-body {
                    padding: 24px;
                }

                .modal-desc {
                    font-size: 14px;
                    color: var(--gov-text-secondary);
                    line-height: 1.65;
                    margin-bottom: 20px;
                }

                .modal-code-box {
                    background: #091222;
                    border: 1px solid #000000;
                    border-radius: 2px;
                    overflow: hidden;
                }

                .code-box-header {
                    background: #0f172a;
                    padding: 8px 14px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-size: 11px;
                    color: #94a3b8;
                    border-bottom: 1px solid #1e293b;
                }

                .modal-pre {
                    padding: 16px;
                    font-size: 12px;
                    color: #93c5fd;
                    line-height: 1.6;
                    overflow-x: auto;
                }

                .gov-modal-footer {
                    padding: 16px 24px;
                    background: #f8fafc;
                    border-top: 1px solid var(--gov-border-strong);
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                }

                /* VÍDEO SIMULADO */
                .video-player-simulation {
                    background: #091222;
                    border: 2px solid #000000;
                    aspect-ratio: 16 / 9;
                    display: grid;
                    place-items: center;
                    padding: 30px;
                    color: #ffffff;
                    text-align: center;
                }

                .player-screen-center {
                    max-width: 500px;
                }

                .player-big-icon {
                    color: var(--gov-blue-400);
                    margin-bottom: 14px;
                }

                .player-screen-center h4 {
                    font-size: 18px;
                    font-weight: 900;
                    margin-bottom: 8px;
                }

                .player-screen-center p {
                    font-size: 13px;
                    color: #94a3b8;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }

                .player-controls-mock {
                    background: rgba(255, 255, 255, 0.08);
                    padding: 10px 14px;
                    border-radius: 4px;
                }

                .play-bar-bg {
                    height: 6px;
                    background: #334155;
                    border-radius: 3px;
                    margin-bottom: 6px;
                    overflow: hidden;
                }

                .play-bar-fill {
                    height: 100%;
                    background: var(--gov-blue-500);
                }

                .play-bar-times {
                    display: flex;
                    justify-content: space-between;
                    font-size: 10px;
                    color: #94a3b8;
                }

                /* ==================== FOOTER ==================== */
                .gov-footer {
                    background: #040913;
                    color: #ffffff;
                    padding: 70px 0 30px;
                    border-top: 3px solid var(--gov-navy-900);
                }

                .gov-footer-grid {
                    display: grid;
                    grid-template-columns: 1.8fr 1fr 1.2fr 1fr;
                    gap: 50px;
                    margin-bottom: 50px;
                }

                .footer-lead-text {
                    font-size: 12px;
                    color: #94a3b8;
                    line-height: 1.7;
                    margin: 16px 0;
                }

                .footer-legal-badge {
                    font-size: 10px;
                    font-weight: 800;
                    color: #64748b;
                    letter-spacing: 0.06em;
                }

                .footer-col-nav h5 {
                    font-size: 12px;
                    font-weight: 900;
                    letter-spacing: 0.1em;
                    color: #ffffff;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }

                .footer-col-nav ul {
                    list-style: none;
                    display: grid;
                    gap: 10px;
                    font-size: 12px;
                    color: #94a3b8;
                }

                .footer-col-nav a:hover {
                    color: #ffffff;
                }

                .footer-meta-p {
                    font-size: 12px;
                    color: #94a3b8;
                    line-height: 1.8;
                }

                .footer-legal-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-top: 25px;
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    font-size: 11px;
                    color: #64748b;
                }

                .footer-legal-tags {
                    display: flex;
                    gap: 16px;
                    font-weight: 700;
                }

                /* ==================== RESPONSIVIDADE ==================== */
                @media (max-width: 1024px) {
                    .hero-inner-grid { grid-template-columns: 1fr; }
                    .hero-isometric-wrapper { display: none; }
                    .problem-grid, .brutalist-tech-grid { grid-template-columns: 1fr 1fr; }
                    .arch-layers-flow { grid-template-columns: 1fr; }
                    .flow-arrow { display: none; }
                    .sticky-split-layout { grid-template-columns: 1fr; }
                    .sticky-nav-column { position: static; }
                    .diagrams-grid, .interfaces-cards-grid { grid-template-columns: 1fr; }
                    .video-demonstrativo-card { grid-template-columns: 1fr; }
                    .dossie-box { grid-template-columns: 1fr; }
                    .aluno-details-grid { grid-template-columns: 1fr 1fr; }
                    .gov-footer-grid { grid-template-columns: 1fr 1fr; }
                }

                @media (max-width: 768px) {
                    .gov-topbar { display: none; }
                    .gov-nav { display: none; }
                    .problem-grid, .brutalist-tech-grid { grid-template-columns: 1fr; }
                    .aluno-details-grid { grid-template-columns: 1fr; }
                    .screen-metrics-strip { grid-template-columns: 1fr; }
                    .dash-kpi-row, .est-grid-cards { grid-template-columns: 1fr; }
                    .dash-table-head, .dash-table-row { grid-template-columns: 1fr; gap: 4px; }
                    .auth-layout { grid-template-columns: 1fr; }
                    .gov-footer-grid { grid-template-columns: 1fr; }
                    .footer-legal-bar { flex-direction: column; gap: 10px; text-align: center; }
                }
            `}</style>
        </>
    );
}
