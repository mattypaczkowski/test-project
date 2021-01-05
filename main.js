const name = "Mateusz";
const developer = "programistą";

console.log("Cześć!");
console.log(`Jestem ${name} i moim celem jest zostać ${developer}.`);
console.log("Trzymaj za mnie kciuki!");

const articel = document.querySelector(".article--js");

articel.innerHTML = `<h4 class="article__tittle">Czym są frameworki i biblioteki</h4>
<p class="article__paragraph">
Zacznijmy od tego, co to framework lub biblioteka. Internet jest pełen definicji i niektóre z nich zakładają, że zastosowanie zasady odwrócenia sterowania jest główną różnicą między tymi dwoma pojęciami. Inne zaś twierdzą, że biblioteka jest zbiorem metod specyficznych dla zadania, a framework to zbyt szeroki termin, który mógłby oznaczać tyle, co biblioteka, zbiór bibliotek lub coś jeszcze bardziej zawiłego.
Na potrzeby tego artykułu wszyscy musimy mieć na uwadze, że zarówno biblioteka, jak i framework, są zbiorami metod mających na celu przyspieszenie rozwoju i wyodrębnienie typowych lub złożonych zadań.
</br>
<i>Artykuł powyżej znajdziesz w DOM. Powstał dzięki właściwością document.querySelector i artical.innerHTML.</i>
</p>`;

console.log(articel);

