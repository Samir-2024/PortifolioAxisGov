/**
 * AxisGov — Portfólio de Estágio • UniFil
 * Script de Interatividade Vanilla JS
 */

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. NAVEGAÇÃO & SCROLL SPY DOS CASOS DE USO
    // ==========================================
    const caseButtons = document.querySelectorAll(".sticky-link-btn");
    const caseBlocks = document.querySelectorAll(".sticky-screen-block");

    function setActiveCase(index) {
        caseButtons.forEach((btn, idx) => {
            if (idx === index) {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    caseButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            setActiveCase(index);
            const targetBlock = document.getElementById(`case-anchor-${index}`);
            if (targetBlock) {
                targetBlock.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    if (caseBlocks.length > 0 && "IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
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

        caseBlocks.forEach((block) => observer.observe(block));
    }

    // ==========================================
    // 2. MODAL DE DIAGRAMAS (LIGHTBOX)
    // ==========================================
    const diagramModal = document.getElementById("diagram-modal");
    const diagramModalKicker = document.getElementById("diag-modal-type");
    const diagramModalTitle = document.getElementById("diag-modal-title");
    const diagramModalDesc = document.getElementById("diag-modal-desc");
    const diagramModalImg = document.getElementById("diag-modal-img");
    const diagramModalExtLink = document.getElementById("diag-modal-ext-link");

    function openDiagramModal(data) {
        if (!diagramModal) return;
        diagramModalKicker.textContent = `DIAGRAMA OFICIAL • ${data.type.toUpperCase()}`;
        diagramModalTitle.textContent = data.title;
        diagramModalDesc.textContent = data.desc;
        diagramModalImg.src = data.image;
        diagramModalImg.alt = data.title;
        diagramModalExtLink.href = data.image;

        diagramModal.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeDiagramModal() {
        if (!diagramModal) return;
        diagramModal.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-diag-trigger]").forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const card = trigger.closest(".diagram-card-gov");
            if (card) {
                const data = {
                    title: card.dataset.diagTitle || "",
                    type: card.dataset.diagType || "",
                    image: card.dataset.diagImage || "",
                    desc: card.dataset.diagDesc || "",
                };
                openDiagramModal(data);
            }
        });
    });

    if (diagramModal) {
        diagramModal.querySelectorAll(".btn-close-modal, .btn-gov.outline").forEach((btn) => {
            btn.addEventListener("click", closeDiagramModal);
        });

        diagramModal.addEventListener("click", (e) => {
            if (e.target === diagramModal) {
                closeDiagramModal();
            }
        });
    }

    // ==========================================
    // 3. MODAL DE VÍDEOS DEMONSTRATIVOS
    // ==========================================
    const videoModal = document.getElementById("video-modal");
    const videoModalTitle = document.getElementById("video-modal-title");
    const videoModalDesc = document.getElementById("video-modal-desc");
    const videoModalPlayer = document.getElementById("video-modal-player");
    const videoModalDownload = document.getElementById("video-modal-download");

    function openVideoModal(data) {
        if (!videoModal) return;
        videoModalTitle.textContent = data.title;
        videoModalDesc.textContent = data.desc;
        videoModalPlayer.src = data.src;
        videoModalDownload.href = data.src;

        videoModal.classList.add("is-open");
        document.body.style.overflow = "hidden";
        videoModalPlayer.play().catch(() => {});
    }

    function closeVideoModal() {
        if (!videoModal) return;
        videoModalPlayer.pause();
        videoModalPlayer.currentTime = 0;
        videoModalPlayer.src = "";
        videoModal.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    document.querySelectorAll("[data-video-modal-trigger]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const data = {
                title: btn.dataset.videoTitle || "Vídeo Demonstrativo",
                desc: btn.dataset.videoDesc || "",
                src: btn.dataset.videoSrc || "",
            };
            openVideoModal(data);
        });
    });

    if (videoModal) {
        videoModal.querySelectorAll(".btn-close-modal, .btn-gov.outline").forEach((btn) => {
            btn.addEventListener("click", closeVideoModal);
        });

        videoModal.addEventListener("click", (e) => {
            if (e.target === videoModal) {
                closeVideoModal();
            }
        });
    }

    // Fechar modais ao teclar ESC
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeDiagramModal();
            closeVideoModal();
        }
    });
});
