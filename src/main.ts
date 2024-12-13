function printForm() {
    const printArea = document.getElementById('container');
    console.log(printArea);
    if (!printArea) return;

    const originalContent = document.body.innerHTML;
    document.body.innerHTML = printArea.outerHTML;
    window.print();
    document.body.innerHTML = originalContent;
}

// Додаємо до глобального контексту
(window as any).printForm = printForm;
