function printForm(): void {
    // Знаходимо всі input елементи
    const inputs = document.querySelectorAll<HTMLInputElement>("input");
    const originalValues: { input: HTMLInputElement; parent: HTMLElement; span: HTMLSpanElement }[] = [];

    // Замінюємо input на текстові span
    inputs.forEach((input) => {
        const span = document.createElement("span");
        span.textContent = input.value;

        // Зберігаємо стиль
        const computedStyle = getComputedStyle(input);
        span.style.cssText = computedStyle.cssText;

        // Зберігаємо інформацію про заміну
        originalValues.push({ input, parent: input.parentElement as HTMLElement, span });

        // Заміна input на span
        const parent = input.parentElement;
        if (parent) {
            parent.replaceChild(span, input);
        }
    });

    // Викликаємо друк
    window.print();

    // Повертаємо сторінку у початковий стан
    originalValues.forEach(({ input, parent, span }) => {
        parent.replaceChild(input, span);
    });
}

// Додаємо функцію до глобального контексту
(window as any).printForm = printForm;


// Додаємо до глобального контексту
(window as any).printForm = printForm;
