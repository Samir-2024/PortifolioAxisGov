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
    | "clock";

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
// MÓDULOS DE CASOS DE USO COM TELAS REAIS
// ==========================================
interface CaseStudy {
    id: string;
    num: string;
    label: string;
    title: string;
    subtitle: string;
    regulation: string;
    metrics: { label: string; val: string }[];
    screenType: "auth" | "dashboard" | "patrimonio" | "estoque";
}

const CASE_STUDIES: CaseStudy[] = [
    {
        id: "auth",
        num: "01",
        label: "SEGURANÇA INSTITUCIONAL",
        title: "Autenticação & Matriz de Perfis",
        subtitle:
            "Controle de acesso rigoroso aderente aos padrões federais e estaduais de identificação de agentes públicos, com suporte a certificado ICP-Brasil, TOTP de duplo fator e segregação de competências.",
        regulation: "Conformidade LGPD Art. 46 • ISO/IEC 27001 • Padrão ICP-Brasil",
        metrics: [
            { label: "Argon2id KDF", val: "64MB Memory / 4 Threads" },
            { label: "Sessão Efêmera", val: "30min Timeout Compulsório" },
            { label: "Risco de Fraude", val: "Zero Acessos Indevidos" },
        ],
        screenType: "auth",
    },
    {
        id: "dashboard",
        num: "02",
        label: "GOVERNANÇA FISCAL",
        title: "Execução Orçamentária & BI",
        subtitle:
            "Centralização das despesas públicas por unidade gestora. Confronto contínuo entre dotação inicial, empenho, liquidação e pagamento, garantindo visibilidade analítica em tempo real para a controladoria.",
        regulation: "Lei de Responsabilidade Fiscal (LRF 101/2000) • Padrão SICONFI",
        metrics: [
            { label: "Orçamento Sob Gestão", val: "R$ 142.800.000,00" },
            { label: "Taxa de Liquidação", val: "89.4% no Exercício" },
            { label: "Tempo de Agregação", val: "< 45ms no Postgres" },
        ],
        screenType: "dashboard",
    },
    {
        id: "patrimonio",
        num: "03",
        label: "CONTROLE PATRIMONIAL",
        title: "Tombamento & Bens Públicos",
        subtitle:
            "Gestão integral do ativo imobilizado: atribuição de tombo único UUIDv7, emissão de termos de cautela assinados digitalmente, cálculo automático de depreciação acumulada e inventário contábil.",
        regulation: "Norma Contábil NBC TSP 07 • Lei 4.320/64 de Finanças Públicas",
        metrics: [
            { label: "Ativos Tombados", val: "28.450 Itens Físicos" },
            { label: "Acurácia de Inventário", val: "99.98% Auditado" },
            { label: "Depreciação Mensal", val: "Automática NBCT-SP" },
        ],
        screenType: "patrimonio",
    },
    {
        id: "estoque",
        num: "04",
        label: "LOGÍSTICA & ALMOXARIFADO",
        title: "Suprimentos & Curva ABC",
        subtitle:
            "Monitoramento preditivo de consumo para hospitais, escolas e secretarias. Bloqueio automático de desabastecimento através de ponto de pedido automático e conciliação por leitor ótico.",
        regulation: "Nova Lei de Licitações (Lei 14.133/2021) • Princípio da Eficiência",
        metrics: [
            { label: "Disponibilidade de Insumos", val: "99.4% Sem Ruptura" },
            { label: "Rastreio por Lote", val: "100% dos Materiais" },
            { label: "Tempo de Requisição", val: "-68% no Fluxo Geral" },
        ],
        screenType: "estoque",
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
                        <h3>Portal de Governança</h3>
                        <p>Acesso restrito a servidores e auditores autorizados pelo Tribunal de Contas.</p>
                        <div className="cert-badge">
                            <span className="cert-dot" />
                            <span>Ambiente Homologado ICP-Brasil</span>
                        </div>
                    </div>
                    <div className="auth-panel-right">
                        <div className="auth-card-mock">
                            <span className="mock-label">AUTENTICAÇÃO ÚNICA</span>
                            <h4 className="mock-title">Identificação do Servidor</h4>
                            <div className="mock-field">
                                <label>Matrícula Funcional / CPF</label>
                                <div className="mock-input">GOV-2024-89104</div>
                            </div>
                            <div className="mock-field">
                                <label>Token de Segurança (TOTP)</label>
                                <div className="mock-input code-dots">● ● ● ● ● ●</div>
                            </div>
                            <div className="mock-btn-row">
                                <div className="mock-btn primary">Validar Credencial</div>
                                <div className="mock-btn secondary">Certificado Digital A1/A3</div>
                            </div>
                            <div className="mock-footer-sec">
                                <span>Conexão TLS 1.3 • Hash da Sessão: 0x9f2a...88c1</span>
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
                        <span className="dash-pill">ORÇAMENTO 2024</span>
                        <h4>Painel Geral de Execução Orçamentária & Fiscal</h4>
                    </div>
                    <div className="dash-actions">
                        <span className="dash-filter">Exercício: 2024 (Consolidado)</span>
                    </div>
                </div>

                <div className="dash-kpi-row">
                    <div className="dash-stat">
                        <span className="stat-label">Dotação Inicial Aprovada</span>
                        <span className="stat-val">R$ 142.800.000,00</span>
                        <span className="stat-sub">Lei Orçamentária Anual</span>
                    </div>
                    <div className="dash-stat">
                        <span className="stat-label">Despesas Empenhadas</span>
                        <span className="stat-val text-blue">R$ 118.420.350,00</span>
                        <span className="stat-sub">82.9% do Orçamento</span>
                    </div>
                    <div className="dash-stat">
                        <span className="stat-label">Despesas Liquidadas</span>
                        <span className="stat-val text-green">R$ 98.710.200,00</span>
                        <span className="stat-sub">Serviços e Bens Entregues</span>
                    </div>
                </div>

                <div className="dash-table-wrap">
                    <div className="dash-table-head">
                        <span>UNIDADE GESTORA</span>
                        <span>DOTAÇÃO</span>
                        <span>EMPENHADO</span>
                        <span>STATUS FISCAL</span>
                    </div>
                    {[
                        { sec: "02.01 — Secretaria de Saúde Pública", dot: "R$ 48.200.000", emp: "R$ 44.110.000", st: "REGULAR" },
                        { sec: "02.02 — Secretaria de Educação Básica", dot: "R$ 39.500.000", emp: "R$ 36.890.000", st: "REGULAR" },
                        { sec: "02.03 — Secretaria de Obras e Infraestrutura", dot: "R$ 28.100.000", emp: "R$ 19.420.000", st: "AUDITORIA" },
                        { sec: "02.04 — Secretaria de Tecnologia e Gestão", dot: "R$ 14.000.000", emp: "R$ 12.850.000", st: "REGULAR" },
                    ].map((row, i) => (
                        <div className="dash-table-row" key={i}>
                            <span className="font-bold">{row.sec}</span>
                            <span>{row.dot}</span>
                            <span className="font-mono">{row.emp}</span>
                            <span>
                                <span className={`table-badge ${row.st === "REGULAR" ? "green" : "amber"}`}>{row.st}</span>
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
                        <span className="dash-pill">DEPARTAMENTO DE PATRIMÔNIO</span>
                        <h4>Registro Geral de Bens Tombados (Inventário Permanente)</h4>
                    </div>
                    <div className="dash-actions">
                        <span className="dash-filter">28.450 Ativos Registrados</span>
                    </div>
                </div>

                <div className="pat-table-wrap">
                    <div className="dash-table-head">
                        <span>TOMBO</span>
                        <span>DESCRIÇÃO DO ATIVO</span>
                        <span>LOCALIZAÇÃO</span>
                        <span>VALOR CONTÁBIL</span>
                        <span>CONSERVAÇÃO</span>
                    </div>
                    {[
                        {
                            tombo: "TMB-0028410",
                            desc: "Servidor Blade Enterprise Dell PowerEdge R750 64GB",
                            loc: "Datacenter Central • Rack 04",
                            val: "R$ 68.900,00",
                            st: "EXCELENTE",
                        },
                        {
                            tombo: "TMB-0028409",
                            desc: "Microcomputador Estação de Trabalho Core i7 32GB",
                            loc: "Secretaria de Finanças • Gabinete",
                            val: "R$ 5.420,00",
                            st: "BOM",
                        },
                        {
                            tombo: "TMB-0028408",
                            desc: "Veículo Utilitário Ambulância UTI Móvel Sprinter",
                            loc: "Hospital Regional • Garagem 01",
                            val: "R$ 385.000,00",
                            st: "EM OPERAÇÃO",
                        },
                        {
                            tombo: "TMB-0028407",
                            desc: "Aparelho de Ultrassonografia Digital Diagnóstica",
                            loc: "Centro de Saúde Central • Sala 03",
                            val: "R$ 142.000,00",
                            st: "MANUTENÇÃO PREV.",
                        },
                    ].map((item) => (
                        <div className="dash-table-row" key={item.tombo}>
                            <span className="font-mono text-blue font-bold">{item.tombo}</span>
                            <span>{item.desc}</span>
                            <span className="text-muted">{item.loc}</span>
                            <span className="font-mono">{item.val}</span>
                            <span>
                                <span className="table-badge blue">{item.st}</span>
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
                    <h4>Controle de Estoque & Movimentações de Suprimentos</h4>
                </div>
                <div className="dash-actions">
                    <span className="dash-filter">Curva ABC • Giro Contínuo</span>
                </div>
            </div>

            <div className="est-grid-cards">
                <div className="est-card-item">
                    <span className="est-code font-mono">SKU-MED-8841</span>
                    <h5>Medicamento Antimicrobiano Injetável 500mg</h5>
                    <div className="est-bar-wrap">
                        <div className="est-bar-fill" style={{ width: "82%" }} />
                    </div>
                    <div className="est-meta-row">
                        <span>Estoque: 4.820 un.</span>
                        <span className="text-green font-bold">Acima do Mínimo</span>
                    </div>
                </div>
                <div className="est-card-item">
                    <span className="est-code font-mono">SKU-EPI-9902</span>
                    <h5>Luvas Cirúrgicas Nitrílicas Estéreis (Caixa c/ 100)</h5>
                    <div className="est-bar-wrap">
                        <div className="est-bar-fill alert" style={{ width: "24%" }} />
                    </div>
                    <div className="est-meta-row">
                        <span>Estoque: 310 cx.</span>
                        <span className="text-amber font-bold">Ponto de Pedido</span>
                    </div>
                </div>
                <div className="est-card-item">
                    <span className="est-code font-mono">SKU-MAT-1049</span>
                    <h5>Papel A4 Reciclado 75g (Resma c/ 500 folhas)</h5>
                    <div className="est-bar-wrap">
                        <div className="est-bar-fill" style={{ width: "65%" }} />
                    </div>
                    <div className="est-meta-row">
                        <span>Estoque: 1.250 resmas</span>
                        <span className="text-green font-bold">Regular</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================
export default function Home() {
    const [activeCase, setActiveCase] = useState<number>(0);
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
                <title>AxisGov — Sistema Integrado de Gestão Pública & Governança</title>
                <meta
                    name="description"
                    content="Apresentação institucional da plataforma AxisGov. Engenharia de software para o setor público desenvolvida com Laravel 11, React 19, TypeScript e PostgreSQL."
                />
            </Head>

            <div className="gov-site">
                {/* ==========================================
                    BARRA INSTITUCIONAL SUPERIOR (PADRÃO GOV)
                   ========================================== */}
                <div className="gov-topbar">
                    <div className="gov-container topbar-flex">
                        <div className="gov-topbar-left">
                            <span className="gov-flag-mark" />
                            <span className="gov-topbar-title">PORTAL OFICIAL DE ENGENHARIA DE SOFTWARE & GESTÃO</span>
                        </div>
                        <div className="gov-topbar-right">
                            <span className="topbar-link">Acesso à Informação</span>
                            <span className="topbar-sep">/</span>
                            <span className="topbar-link">Transparência Ativa</span>
                            <span className="topbar-sep">/</span>
                            <span className="topbar-link">Auditoria Interna</span>
                        </div>
                    </div>
                </div>

                {/* ==========================================
                    HEADER PRINCIPAL
                   ========================================== */}
                <header className="gov-header">
                    <div className="gov-container header-flex">
                        <a href="#inicio" className="gov-brand">
                            <div className="gov-brand-icon">
                                <Icon name="shield" size={20} />
                            </div>
                            <div className="gov-brand-text">
                                <span className="brand-name">
                                    Axis<strong>Gov</strong>
                                </span>
                                <span className="brand-tagline">SISTEMA INTEGRADO DE GESTÃO PÚBLICA</span>
                            </div>
                        </a>

                        <nav className="gov-nav">
                            <a href="#inicio" className="gov-nav-link">Início</a>
                            <a href="#visao-geral" className="gov-nav-link">Visão Geral</a>
                            <a href="#casos-de-uso" className="gov-nav-link">Casos de Uso</a>
                            <a href="#interfaces" className="gov-nav-link">Interfaces do Sistema</a>
                            <a href="#tecnologias" className="gov-nav-link">Engenharia & Stack</a>
                            <a href="#especificacao" className="gov-nav-btn">Especificação Técnica</a>
                        </nav>
                    </div>
                </header>

                <main>
                    {/* ==========================================
                        HERO SECTION: ISOMÉTRICA & PESO INSTITUCIONAL
                       ========================================== */}
                    <section id="inicio" className="hero-institutional">
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
                                    <span>PADRÃO GOVERNAMENTAL DE ALTA FIDELIDADE</span>
                                </div>

                                <h1 className="hero-title">
                                    A robustez da gestão pública com a precisão da engenharia de ponta.
                                </h1>

                                <p className="hero-lead">
                                    O <strong>AxisGov</strong> substitui o modelo fragmentado de sistemas administrativos
                                    por uma plataforma monolítica moderna construída em <strong>Laravel 11, React 19 e PostgreSQL</strong>.
                                    Desenvolvido sob preceitos rígidos de auditoria, rastreabilidade fiscal e resposta sub-100ms.
                                </p>

                                <div className="hero-meta-bar">
                                    <div className="meta-stat">
                                        <strong>100%</strong>
                                        <span>Rastreabilidade Contábil</span>
                                    </div>
                                    <div className="meta-sep" />
                                    <div className="meta-stat">
                                        <strong>Art. 48</strong>
                                        <span>Lei de Resp. Fiscal (LRF)</span>
                                    </div>
                                    <div className="meta-sep" />
                                    <div className="meta-stat">
                                        <strong>Zero Reload</strong>
                                        <span>Single Page App com Inertia</span>
                                    </div>
                                </div>

                                <div className="hero-cta-actions">
                                    <a href="#casos-de-uso" className="btn-gov primary">
                                        <span>Explorar Módulos Operacionais</span>
                                        <Icon name="arrow" size={14} />
                                    </a>
                                    <a href="#interfaces" className="btn-gov outline">
                                        <span>Visualizar Telas Reais</span>
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
                                                <span>axisgov.local / painel-geral / orcamento-fiscal</span>
                                            </div>
                                            <div className="browser-status-iso">
                                                <span className="status-live-badge">SISTEMA ATIVO</span>
                                            </div>
                                        </div>

                                        {/* PAINEL REAL DE ALTA DENSIDADE */}
                                        <div className="browser-body-iso">
                                            <div className="iso-kpi-grid">
                                                <div className="iso-kpi-card">
                                                    <span className="iso-kpi-tag">DOTAÇÃO ORÇAMENTÁRIA</span>
                                                    <span className="iso-kpi-val">R$ 142.800.000</span>
                                                    <span className="iso-kpi-trend">LOA Consolidada 2024</span>
                                                </div>
                                                <div className="iso-kpi-card highlight">
                                                    <span className="iso-kpi-tag">LIQUIDAÇÃO FISCAL</span>
                                                    <span className="iso-kpi-val">89.4%</span>
                                                    <span className="iso-kpi-trend">Em Conformidade TCE</span>
                                                </div>
                                                <div className="iso-kpi-card">
                                                    <span className="iso-kpi-tag">BENS TOMBADOS</span>
                                                    <span className="iso-kpi-val">28.450</span>
                                                    <span className="iso-kpi-trend">Inventário 100% Ativo</span>
                                                </div>
                                            </div>

                                            <div className="iso-table-mock">
                                                <div className="iso-tr iso-th">
                                                    <span>PROTOCOLO</span>
                                                    <span>DESCRIÇÃO ADMINISTRATIVA</span>
                                                    <span>SECRETARIA</span>
                                                    <span>STATUS</span>
                                                </div>
                                                <div className="iso-tr">
                                                    <span className="font-mono text-blue font-bold">#PRC-2024-8841</span>
                                                    <span>Aquisição de Infraestrutura de Servidores Blade</span>
                                                    <span>Tecnologia</span>
                                                    <span className="badge-pill green">DEFERIDO</span>
                                                </div>
                                                <div className="iso-tr">
                                                    <span className="font-mono text-blue font-bold">#PRC-2024-8840</span>
                                                    <span>Reforma e Adequação do Hospital Regional</span>
                                                    <span>Saúde</span>
                                                    <span className="badge-pill blue">EM ANÁLISE</span>
                                                </div>
                                                <div className="iso-tr">
                                                    <span className="font-mono text-blue font-bold">#PRC-2024-8839</span>
                                                    <span>Inventário Anual de Veículos e Almoxarifado</span>
                                                    <span>Patrimônio</span>
                                                    <span className="badge-pill green">CONCLUÍDO</span>
                                                </div>
                                            </div>

                                            <div className="iso-footer-bar">
                                                <span className="font-mono text-xs text-muted">
                                                    Sessão: GOV-89410 • Protocolo TLS 1.3 • Hash: 0x8f19c42
                                                </span>
                                                <span className="iso-latency-pill">Latência: 42ms</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        VISÃO GERAL: MINIMALISMO UTILITÁRIO & ESPAÇO NEGATIVO
                       ========================================== */}
                    <section id="visao-geral" className="section-utilitarian">
                        <div className="gov-container">
                            <div className="util-header">
                                <span className="util-kicker">01 / VISÃO GERAL</span>
                                <h2 className="util-title">
                                    Tecnologia concebida para governar com rigor, sem concessões estéticas.
                                </h2>
                                <p className="util-lead">
                                    Abandonamos o padrão de caixas genéricas com sombras suaves. O AxisGov orienta-se pela
                                    tipografia funcional, alto contraste e espaço negativo que valorizam a tomada de decisão
                                    e o dever constitucional de transparência.
                                </p>
                            </div>

                            {/* ITENS SOLTOS SEM CAIXAS BRANCAS, GUIADOS POR TIPOGRAFIA E LINHAS SÓLIDAS */}
                            <div className="util-pillars-grid">
                                <div className="util-pillar">
                                    <span className="pillar-num">01.1</span>
                                    <h3 className="pillar-heading">Segregação de Competências</h3>
                                    <p className="pillar-body">
                                        Nenhum ato administrativo de alto impacto — seja liquidação financeira ou baixa patrimonial —
                                        é operado por uma única chave. Implementamos o princípio da segregação de funções integrado
                                        ao RBAC em tempo de banco de dados.
                                    </p>
                                    <div className="pillar-meta">
                                        <span>ISO 27001</span>
                                        <span>Controle Interno</span>
                                        <span>Princípio da Impessoalidade</span>
                                    </div>
                                </div>

                                <div className="util-pillar">
                                    <span className="pillar-num">01.2</span>
                                    <h3 className="pillar-heading">Trilha de Auditoria Imutável</h3>
                                    <p className="pillar-body">
                                        Cada evento de criação ou modificação gera uma assinatura atômica no PostgreSQL.
                                        Triggers de banco impedem fisicamente atualizações ou exclusões retroativas, garantindo
                                        a integridade exigida pelos Tribunais de Contas.
                                    </p>
                                    <div className="pillar-meta">
                                        <span>Append-Only Ledger</span>
                                        <span>Assinatura Digital</span>
                                        <span>Lei de Acesso à Informação</span>
                                    </div>
                                </div>

                                <div className="util-pillar">
                                    <span className="pillar-num">01.3</span>
                                    <h3 className="pillar-heading">Alta Disponibilidade & Zero Reload</h3>
                                    <p className="pillar-body">
                                        Ao unir a segurança do roteamento no servidor do Laravel 11 à agilidade reativa do React 19
                                        via protocolo Inertia.js, servidores públicos operam sistemas complexos sem lentidão ou
                                        telas de carregamento truncadas.
                                    </p>
                                    <div className="pillar-meta">
                                        <span>Inertia.js v2</span>
                                        <span>PostgreSQL 16</span>
                                        <span>Sub-100ms Rendering</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        CASOS DE USO: SCROLL INTERATIVO (STICKY SPLIT)
                       ========================================== */}
                    <section id="casos-de-uso" className="section-sticky-cases">
                        <div className="gov-container">
                            <div className="sticky-cases-header">
                                <span className="util-kicker">02 / MÓDULOS DE NEGÓCIO</span>
                                <h2 className="util-title">
                                    Casos de Uso estruturados por processo e responsabilidade fiscal.
                                </h2>
                                <p className="util-lead">
                                    Role a página para acompanhar a transição entre os módulos. À esquerda, a especificação
                                    conceitual e jurídica; à direita, a tela real em funcionamento.
                                </p>
                            </div>

                            <div className="sticky-split-layout">
                                {/* LADO ESQUERDO: LISTA STICKY COM TIPOGRAFIA GRANDE E NAVEGABILIDADE */}
                                <div className="sticky-nav-column">
                                    <div className="sticky-nav-inner">
                                        <p className="sticky-instruction">SELECIONE OU ROLE A PÁGINA:</p>

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

                                {/* LADO DIREITO: TELAS REAIS CORRESPONDENTES AO SCROLL */}
                                <div className="sticky-screens-column">
                                    {CASE_STUDIES.map((item, idx) => (
                                        <div
                                            id={`case-anchor-${idx}`}
                                            data-case-index={idx}
                                            className="sticky-screen-block"
                                            key={item.id}
                                        >
                                            <div className="screen-detail-header">
                                                <div className="screen-tag-row">
                                                    <span className="screen-num font-mono">{item.num} / 04</span>
                                                    <span className="screen-label">{item.label}</span>
                                                </div>
                                                <h3 className="screen-title">{item.title}</h3>
                                                <p className="screen-desc">{item.subtitle}</p>
                                                <div className="screen-regulation">
                                                    <Icon name="shield" size={14} />
                                                    <span>{item.regulation}</span>
                                                </div>
                                            </div>

                                            {/* MOLDURA DO NAVEGADOR COM SOMBRA RÍGIDA E DESLOCADA */}
                                            <div className="browser-frame-hard">
                                                <div className="browser-bar-minimal">
                                                    <div className="bar-dots">
                                                        <span />
                                                        <span />
                                                        <span />
                                                    </div>
                                                    <div className="bar-address">
                                                        <span>axisgov.local / app / {item.id}</span>
                                                    </div>
                                                </div>

                                                <div className="browser-content-wrap">
                                                    <RealSystemScreen type={item.screenType} />
                                                </div>
                                            </div>

                                            {/* MÉTRICAS DE ENGENHARIA DO CASO */}
                                            <div className="screen-metrics-strip">
                                                {item.metrics.map((m, mIdx) => (
                                                    <div className="screen-metric" key={mIdx}>
                                                        <span className="metric-k">{m.label}</span>
                                                        <strong className="metric-v font-mono">{m.val}</strong>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        INTERFACES: TELAS REAIS COM PROFUNDIDADE AGRESSIVA
                       ========================================== */}
                    <section id="interfaces" className="section-interfaces-grid">
                        <div className="gov-container">
                            <div className="util-header">
                                <span className="util-kicker">03 / ARTEFATOS DE INTERFACE</span>
                                <h2 className="util-title">
                                    Ambiente de produção: interfaces projetadas para alta produtividade.
                                </h2>
                                <p className="util-lead">
                                    Sem ilustrações vazias. O AxisGov apresenta formulários densos, atalhos de teclado,
                                    visualização tabular de alto volume e contraste estrito para jornadas diárias de 8 horas de uso.
                                </p>
                            </div>

                            <div className="interfaces-cards-grid">
                                {/* CARD DE INTERFACE 1 */}
                                <div className="interface-showcase-item">
                                    <div className="browser-frame-hard">
                                        <div className="browser-bar-minimal">
                                            <div className="bar-dots"><span /><span /><span /></div>
                                            <div className="bar-address"><span>axisgov.local / rh / servidores</span></div>
                                        </div>
                                        <div className="browser-content-wrap">
                                            <RealSystemScreen type="dashboard" />
                                        </div>
                                    </div>
                                    <div className="interface-caption">
                                        <h4>01. Painel de Execução & Lançamentos Orçamentários</h4>
                                        <p>Confronto consolidado das dotações orçamentárias com atualização atômica e exportação oficial em PDF/CSV.</p>
                                    </div>
                                </div>

                                {/* CARD DE INTERFACE 2 */}
                                <div className="interface-showcase-item">
                                    <div className="browser-frame-hard">
                                        <div className="browser-bar-minimal">
                                            <div className="bar-dots"><span /><span /><span /></div>
                                            <div className="bar-address"><span>axisgov.local / patrimonio / tombamento</span></div>
                                        </div>
                                        <div className="browser-content-wrap">
                                            <RealSystemScreen type="patrimonio" />
                                        </div>
                                    </div>
                                    <div className="interface-caption">
                                        <h4>02. Inventário de Ativos Físicos & Bens Públicos</h4>
                                        <p>Rastreabilidade física com identificadores UUIDv7, termos de responsabilidade assinados e cálculo contábil de depreciação.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        TECNOLOGIAS: BRUTALISMO TÉCNICO & LINHAS SÓLIDAS
                       ========================================== */}
                    <section id="tecnologias" className="section-technologies-brutalist">
                        <div className="gov-container">
                            <div className="util-header">
                                <span className="util-kicker">04 / ENGENHARIA & STACK</span>
                                <h2 className="util-title">
                                    Pilha de tecnologias: solidez comprovada em ambientes de missão crítica.
                                </h2>
                                <p className="util-lead">
                                    A escolha de cada componente respeitou critérios de estabilidade a longo prazo,
                                    ecossistema maduro e capacidade de atender a órgãos com dezenas de milhares de requisições.
                                </p>
                            </div>

                            {/* TAGS BRUTALISTAS COM TEXTO ESPESSO E LINHA DE DESTAQUE SÓLIDA */}
                            <div className="brutalist-tech-grid">
                                <div className="brutalist-tech-item">
                                    <div className="tech-solid-line" />
                                    <span className="tech-category">FRAMEWORK BACKEND</span>
                                    <h3 className="tech-main-name">LARAVEL 11</h3>
                                    <p className="tech-description">
                                        Núcleo do sistema orientado a Clean Architecture. Eloquent ORM com queries otimizadas,
                                        gerenciamento de filas assíncronas via Redis e middlewares de segurança contra ataques CSRF e SQL Injection.
                                    </p>
                                    <div className="tech-bullet-points">
                                        <span>• PHP 8.4 com Strict Types</span>
                                        <span>• Autenticação Sanctum & RBAC</span>
                                        <span>• Suíte de testes com Pest PHP</span>
                                    </div>
                                </div>

                                <div className="brutalist-tech-item">
                                    <div className="tech-solid-line" />
                                    <span className="tech-category">SPA REATIVO & TIPAGEM</span>
                                    <h3 className="tech-main-name">REACT 19 + TS</h3>
                                    <p className="tech-description">
                                        Camada de apresentação com tipagem estrita de ponta a ponta. Componentes puros, hooks
                                        customizados e validação formal de schemas em formulários administrativos complexos.
                                    </p>
                                    <div className="tech-bullet-points">
                                        <span>• Tipagem estrita de DTOs</span>
                                        <span>• Zero re-renders ociosos</span>
                                        <span>• Acessibilidade WCAG 2.1 AA</span>
                                    </div>
                                </div>

                                <div className="brutalist-tech-item">
                                    <div className="tech-solid-line" />
                                    <span className="tech-category">BANCO RELACIONAL ACID</span>
                                    <h3 className="tech-main-name">POSTGRESQL 16</h3>
                                    <p className="tech-description">
                                        Repositório primário de dados. Garante integridade referencial física, particionamento
                                        mensal para trilha de auditoria e suporte nativo a JSONB para metadados de processos.
                                    </p>
                                    <div className="tech-bullet-points">
                                        <span>• Transações atômicas estritas</span>
                                        <span>• Triggers de imutabilidade</span>
                                        <span>• Índices B-Tree & GIN textuais</span>
                                    </div>
                                </div>

                                <div className="brutalist-tech-item">
                                    <div className="tech-solid-line" />
                                    <span className="tech-category">PROTOCOLO DE ENLACE</span>
                                    <h3 className="tech-main-name">INERTIA.JS V2</h3>
                                    <p className="tech-description">
                                        Ponte arquitetural que elimina a necessidade de construir APIs REST duplicadas exclusivamente
                                        para alimentar a tela. Mantém o roteamento e controle no servidor com fluidez de SPA.
                                    </p>
                                    <div className="tech-bullet-points">
                                        <span>• Cabeçalhos X-Inertia otimizados</span>
                                        <span>• Preservação de estado em navegação</span>
                                        <span>• Hidratação instantânea</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ==========================================
                        ESPECIFICAÇÃO TÉCNICA / BANNER FINAL
                       ========================================== */}
                    <section id="especificacao" className="section-dossie-footer">
                        <div className="gov-container">
                            <div className="dossie-box">
                                <div className="dossie-left">
                                    <span className="dossie-tag">AUDITORIA & PARECER DE ENGENHARIA</span>
                                    <h2 className="dossie-title">
                                        Dossiê técnico e repositório de código disponíveis para inspeção.
                                    </h2>
                                    <p className="dossie-summary">
                                        O código-fonte do AxisGov encontra-se estruturado em conformidade com as melhores práticas de
                                        engenharia de software, incluindo cobertura de testes unitários, diagramas EER e documentação de rotas.
                                    </p>
                                    <div className="dossie-points">
                                        <span><Icon name="check" size={14} /> Padrões de Código PSR-12</span>
                                        <span><Icon name="check" size={14} /> Modelagem Relacional 3FN</span>
                                        <span><Icon name="check" size={14} /> Auditoria Conforme LRF</span>
                                    </div>
                                </div>

                                <div className="dossie-right">
                                    <div className="dossie-meta-card">
                                        <span className="meta-card-title">METADADOS DO REPOSITÓRIO</span>
                                        <div className="meta-card-row">
                                            <span>Projeto:</span>
                                            <strong>AxisGov — Gestão Pública</strong>
                                        </div>
                                        <div className="meta-card-row">
                                            <span>Desenvolvedor:</span>
                                            <strong>Samir (Engenharia de Software)</strong>
                                        </div>
                                        <div className="meta-card-row">
                                            <span>Status:</span>
                                            <strong className="text-green">Homologado para Produção</strong>
                                        </div>
                                        <div className="meta-card-row">
                                            <span>Licença:</span>
                                            <strong>Acadêmica / Institucional</strong>
                                        </div>

                                        <div className="dossie-btn-stack">
                                            <button
                                                type="button"
                                                className="btn-gov primary full-w"
                                                onClick={() => window.print()}
                                            >
                                                <Icon name="file" size={15} />
                                                <span>Exportar Relatório em PDF</span>
                                            </button>
                                            <a
                                                href="#inicio"
                                                className="btn-gov outline full-w"
                                            >
                                                <span>Voltar ao Início do Portal</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

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
                                        <span className="brand-tagline">SISTEMA INTEGRADO DE GESTÃO PÚBLICA</span>
                                    </div>
                                </div>
                                <p className="footer-lead-text">
                                    Plataforma tecnológica de gestão governamental, controle de gastos públicos,
                                    rastreabilidade de patrimônio e auditoria de processos administrativos.
                                </p>
                                <div className="footer-legal-badge">
                                    <span>CONFORMIDADE LEGAL: LEI 14.133/21 • LRF 101/00 • LGPD 13.709/18</span>
                                </div>
                            </div>

                            <div className="footer-col-nav">
                                <h5>Módulos do Sistema</h5>
                                <ul>
                                    <li><a href="#casos-de-uso">Autenticação & Perfis</a></li>
                                    <li><a href="#casos-de-uso">Execução Orçamentária</a></li>
                                    <li><a href="#casos-de-uso">Tombamento de Bens</a></li>
                                    <li><a href="#casos-de-uso">Almoxarifado & Estoque</a></li>
                                </ul>
                            </div>

                            <div className="footer-col-nav">
                                <h5>Engenharia & Arquitetura</h5>
                                <ul>
                                    <li><a href="#tecnologias">Clean Architecture no Laravel 11</a></li>
                                    <li><a href="#tecnologias">React 19 & TypeScript Strict</a></li>
                                    <li><a href="#tecnologias">Persistência ACID no PostgreSQL</a></li>
                                    <li><a href="#tecnologias">Roteamento Eficiente com Inertia</a></li>
                                </ul>
                            </div>

                            <div className="footer-col-nav">
                                <h5>Dados do Projeto</h5>
                                <p className="footer-meta-p">
                                    Projeto de Estágio Supervisionado e Engenharia de Software.<br />
                                    Autor: <strong>Samir</strong>.<br />
                                    Repositório: <strong>PortifolioAxisGov</strong>.
                                </p>
                            </div>
                        </div>

                        <div className="footer-legal-bar">
                            <p>© {new Date().getFullYear()} AxisGov — Sistema Integrado de Gestão Pública. Todos os direitos reservados.</p>
                            <div className="footer-legal-tags">
                                <span>Padrão Governamental</span>
                                <span>Segurança da Informação</span>
                                <span>Auditoria Contínua</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            {/* ==========================================
                CSS EMBUTIDO: ESTILO INSTITUCIONAL & PESO VISUAL
               ========================================== */}
            <style>{`
                /* ==================== DESIGN TOKENS ==================== */
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

                /* ==================== BARRA INSTITUCIONAL SUPERIOR ==================== */
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

                .gov-topbar-title {
                    color: #cbd5e1;
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
                    gap: 24px;
                }

                .gov-nav-link {
                    font-size: 13px;
                    font-weight: 700;
                    color: var(--gov-navy-900);
                    transition: color 0.15s ease;
                }

                .gov-nav-link:hover {
                    color: var(--gov-blue-600);
                }

                .gov-nav-btn {
                    padding: 10px 18px;
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

                /* ==================== HERO INSTITUCIONAL ISOMÉTRICO ==================== */
                .hero-institutional {
                    position: relative;
                    background: var(--gov-navy-900);
                    color: #ffffff;
                    padding: 95px 0 110px;
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

                .hero-code-watermark.left {
                    left: 2%;
                    top: 15%;
                }

                .hero-code-watermark.right {
                    right: 2%;
                    bottom: 10%;
                }

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
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.12em;
                    color: #93c5fd;
                    margin-bottom: 24px;
                }

                .seal-dot {
                    width: 7px;
                    height: 7px;
                    border-radius: 50%;
                    background: #38bdf8;
                    box-shadow: 0 0 8px #38bdf8;
                }

                .hero-title {
                    font-size: clamp(34px, 4.4vw, 54px);
                    font-weight: 900;
                    line-height: 1.12;
                    letter-spacing: -0.04em;
                    margin-bottom: 22px;
                    color: #ffffff;
                }

                .hero-lead {
                    font-size: 16px;
                    line-height: 1.75;
                    color: #cbd5e1;
                    margin-bottom: 34px;
                    max-width: 540px;
                }

                .hero-lead strong {
                    color: #ffffff;
                }

                .hero-meta-bar {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 16px 20px;
                    background: rgba(4, 9, 19, 0.6);
                    border: 1px solid rgba(255, 255, 255, 0.12);
                    margin-bottom: 34px;
                    border-radius: 3px;
                }

                .meta-stat {
                    display: flex;
                    flex-direction: column;
                }

                .meta-stat strong {
                    font-size: 18px;
                    font-weight: 900;
                    color: #ffffff;
                    letter-spacing: -0.02em;
                }

                .meta-stat span {
                    font-size: 11px;
                    color: #94a3b8;
                    font-weight: 600;
                }

                .meta-sep {
                    width: 1px;
                    height: 28px;
                    background: rgba(255, 255, 255, 0.15);
                }

                .hero-cta-actions {
                    display: flex;
                    gap: 14px;
                    flex-wrap: wrap;
                }

                .btn-gov {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 24px;
                    font-size: 13px;
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

                /* ==================== MOLDURA ISOMÉTRICA DA HERO ==================== */
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
                    padding: 22px;
                    background: #f8fafc;
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

                /* ==================== MINIMALISMO UTILITÁRIO ==================== */
                .section-utilitarian {
                    padding: 100px 0;
                    background: #ffffff;
                    border-bottom: 1px solid var(--gov-border-light);
                }

                .util-header {
                    margin-bottom: 60px;
                    max-width: 880px;
                }

                .util-kicker {
                    display: inline-block;
                    font-size: 11px;
                    font-weight: 900;
                    letter-spacing: 0.18em;
                    color: var(--gov-blue-600);
                    margin-bottom: 14px;
                }

                .util-title {
                    font-size: clamp(30px, 3.8vw, 46px);
                    font-weight: 900;
                    letter-spacing: -0.04em;
                    line-height: 1.15;
                    color: var(--gov-navy-900);
                    margin-bottom: 18px;
                }

                .util-lead {
                    font-size: 16px;
                    line-height: 1.75;
                    color: var(--gov-text-secondary);
                }

                .util-pillars-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 50px;
                }

                .util-pillar {
                    /* Elementos soltos, sem caixas brancas ou sombras fofas */
                    position: relative;
                    padding-top: 18px;
                    border-top: 3px solid var(--gov-navy-900);
                }

                .pillar-num {
                    font-family: 'JetBrains Mono', monospace;
                    font-size: 12px;
                    font-weight: 800;
                    color: var(--gov-blue-600);
                    display: block;
                    margin-bottom: 10px;
                }

                .pillar-heading {
                    font-size: 20px;
                    font-weight: 900;
                    letter-spacing: -0.02em;
                    color: var(--gov-navy-900);
                    margin-bottom: 14px;
                    line-height: 1.25;
                }

                .pillar-body {
                    font-size: 14px;
                    line-height: 1.75;
                    color: var(--gov-text-secondary);
                    margin-bottom: 20px;
                }

                .pillar-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                }

                .pillar-meta span {
                    font-size: 10px;
                    font-weight: 800;
                    color: var(--gov-navy-700);
                    background: #f1f5f9;
                    padding: 4px 8px;
                    border-radius: 2px;
                    border: 1px solid #e2e8f0;
                }

                /* ==================== CASOS DE USO: STICKY SCROLL ==================== */
                .section-sticky-cases {
                    padding: 100px 0;
                    background: var(--gov-bg-soft);
                    border-bottom: 1px solid var(--gov-border-strong);
                }

                .sticky-cases-header {
                    margin-bottom: 70px;
                    max-width: 860px;
                }

                .sticky-split-layout {
                    display: grid;
                    grid-template-columns: 380px 1fr;
                    gap: 60px;
                    align-items: start;
                }

                /* COLUNA FIXA DA ESQUERDA (STICKY) */
                .sticky-nav-column {
                    position: sticky;
                    top: 100px;
                }

                .sticky-nav-inner {
                    padding-right: 20px;
                }

                .sticky-instruction {
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.15em;
                    color: var(--gov-text-muted);
                    margin-bottom: 20px;
                }

                .sticky-links-list {
                    display: grid;
                    gap: 14px;
                }

                .sticky-link-btn {
                    display: flex;
                    align-items: flex-start;
                    gap: 16px;
                    text-align: left;
                    background: transparent;
                    border: none;
                    border-left: 3px solid #cbd5e1;
                    padding: 12px 0 12px 18px;
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
                    padding-top: 2px;
                }

                .sticky-link-btn.active .btn-num {
                    color: var(--gov-blue-600);
                }

                .btn-text {
                    display: flex;
                    flex-direction: column;
                }

                .btn-cat {
                    font-size: 10px;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    color: var(--gov-text-muted);
                    margin-bottom: 2px;
                }

                .btn-title {
                    font-size: 18px;
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    color: var(--gov-text-secondary);
                    line-height: 1.25;
                }

                .sticky-link-btn.active .btn-title {
                    color: var(--gov-navy-900);
                }

                /* COLUNA DIREITA: TELAS DOS CASOS */
                .sticky-screens-column {
                    display: grid;
                    gap: 100px;
                }

                .sticky-screen-block {
                    scroll-margin-top: 110px;
                }

                .screen-detail-header {
                    margin-bottom: 24px;
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
                    font-size: clamp(24px, 2.6vw, 34px);
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    color: var(--gov-navy-900);
                    margin-bottom: 10px;
                }

                .screen-desc {
                    font-size: 14px;
                    line-height: 1.7;
                    color: var(--gov-text-secondary);
                    margin-bottom: 14px;
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

                /* ==================== MOLDURA DO NAVEGADOR (SOMBRA RÍGIDA E DESLOCADA) ==================== */
                .browser-frame-hard {
                    background: #ffffff;
                    border: 2px solid var(--gov-navy-900);
                    box-shadow: var(--gov-shadow-hard);
                    border-radius: 3px;
                    overflow: hidden;
                    margin-bottom: 24px;
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

                /* TELAS REAIS DENTRO DO FRAME */
                .sys-screen {
                    padding: 24px;
                    background: #f8fafc;
                }

                .dash-top-bar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 20px;
                    border-bottom: 1px solid var(--gov-border-strong);
                    padding-bottom: 14px;
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
                    margin-bottom: 20px;
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

                /* AUTH SCREEN */
                .auth-layout {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 24px;
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 28px;
                }

                .auth-panel-left {
                    border-right: 1px solid var(--gov-border-light);
                    padding-right: 20px;
                }

                .gov-seal {
                    color: var(--gov-blue-600);
                    margin-bottom: 14px;
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
                    margin-bottom: 20px;
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
                    margin-bottom: 14px;
                }

                .mock-field {
                    margin-bottom: 12px;
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
                    padding: 8px 12px;
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
                    margin-top: 14px;
                }

                .mock-btn {
                    padding: 8px 14px;
                    font-size: 11px;
                    font-weight: 800;
                    text-align: center;
                    border-radius: 2px;
                    cursor: pointer;
                }

                .mock-btn.primary {
                    background: var(--gov-navy-900);
                    color: #ffffff;
                }

                .mock-btn.secondary {
                    background: #e2e8f0;
                    color: var(--gov-navy-900);
                }

                .mock-footer-sec {
                    margin-top: 14px;
                    font-size: 9px;
                    font-family: 'JetBrains Mono', monospace;
                    color: var(--gov-text-muted);
                }

                /* ESTOQUE SCREEN */
                .est-grid-cards {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 14px;
                }

                .est-card-item {
                    background: #ffffff;
                    border: 1px solid var(--gov-border-strong);
                    padding: 16px;
                }

                .est-code {
                    font-size: 10px;
                    font-weight: 800;
                    color: var(--gov-blue-600);
                    display: block;
                    margin-bottom: 6px;
                }

                .est-card-item h5 {
                    font-size: 13px;
                    font-weight: 800;
                    color: var(--gov-navy-900);
                    margin-bottom: 12px;
                    line-height: 1.35;
                }

                .est-bar-wrap {
                    height: 6px;
                    background: #e2e8f0;
                    border-radius: 2px;
                    margin-bottom: 10px;
                    overflow: hidden;
                }

                .est-bar-fill {
                    height: 100%;
                    background: var(--gov-emerald-500);
                }

                .est-bar-fill.alert {
                    background: var(--gov-amber-500);
                }

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
                    padding: 16px 20px;
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
                    font-size: 15px;
                    color: var(--gov-navy-900);
                }

                /* ==================== INTERFACES EM GRADE ==================== */
                .section-interfaces-grid {
                    padding: 100px 0;
                    background: #ffffff;
                    border-bottom: 1px solid var(--gov-border-light);
                }

                .interfaces-cards-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 50px;
                }

                .interface-showcase-item {
                    display: flex;
                    flex-direction: column;
                }

                .interface-caption {
                    padding-top: 8px;
                }

                .interface-caption h4 {
                    font-size: 16px;
                    font-weight: 900;
                    color: var(--gov-navy-900);
                    margin-bottom: 6px;
                }

                .interface-caption p {
                    font-size: 13px;
                    color: var(--gov-text-secondary);
                    line-height: 1.6;
                }

                /* ==================== TECNOLOGIAS: BRUTALISMO TÉCNICO ==================== */
                .section-technologies-brutalist {
                    padding: 100px 0;
                    background: var(--gov-navy-950);
                    color: #ffffff;
                    border-bottom: 3px solid var(--gov-blue-600);
                }

                .section-technologies-brutalist .util-title {
                    color: #ffffff;
                }

                .section-technologies-brutalist .util-lead {
                    color: #94a3b8;
                }

                .brutalist-tech-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 36px;
                }

                .brutalist-tech-item {
                    /* Brutalismo: texto espesso e uma linha de destaque sólida */
                    position: relative;
                    padding-top: 24px;
                }

                .tech-solid-line {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: var(--gov-blue-600);
                }

                .tech-category {
                    display: block;
                    font-size: 10px;
                    font-weight: 900;
                    letter-spacing: 0.16em;
                    color: #93c5fd;
                    margin-bottom: 10px;
                }

                .tech-main-name {
                    font-size: 26px;
                    font-weight: 900;
                    letter-spacing: -0.03em;
                    color: #ffffff;
                    margin-bottom: 14px;
                    line-height: 1.1;
                }

                .tech-description {
                    font-size: 13px;
                    line-height: 1.7;
                    color: #94a3b8;
                    margin-bottom: 18px;
                }

                .tech-bullet-points {
                    display: grid;
                    gap: 6px;
                    font-size: 11px;
                    font-family: 'JetBrains Mono', monospace;
                    color: #cbd5e1;
                }

                /* ==================== DOSSIÊ FINAL & FOOTER ==================== */
                .section-dossie-footer {
                    padding: 90px 0;
                    background: #ffffff;
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
                    gap: 20px;
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
                    .util-pillars-grid { grid-template-columns: 1fr; }
                    .sticky-split-layout { grid-template-columns: 1fr; }
                    .sticky-nav-column { position: static; }
                    .interfaces-cards-grid { grid-template-columns: 1fr; }
                    .brutalist-tech-grid { grid-template-columns: repeat(2, 1fr); }
                    .dossie-box { grid-template-columns: 1fr; }
                    .gov-footer-grid { grid-template-columns: 1fr 1fr; }
                }

                @media (max-width: 768px) {
                    .gov-topbar { display: none; }
                    .gov-nav { display: none; }
                    .brutalist-tech-grid { grid-template-columns: 1fr; }
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
