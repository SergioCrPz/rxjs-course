import { fromEvent, map, tap } from 'rxjs';

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis commodo nibh, vitae elementum orci blandit pellentesque. Curabitur maximus urna ut egestas molestie. Ut vitae lobortis quam. Nam non mi ultricies, tempus arcu non, finibus ante. Vestibulum eget suscipit tortor. Nunc iaculis lectus suscipit, pellentesque ligula id, laoreet lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eget maximus ante. Donec sagittis, dui in finibus ornare, ex leo tempor ligula, ac convallis risus lectus eget eros. Suspendisse suscipit nec ante a porttitor. Ut fringilla ex eu tellus dignissim vestibulum. Aliquam erat volutpat. Curabitur nisi metus, aliquet vitae massa vitae, pharetra aliquam sapien. Nullam hendrerit magna vitae ipsum sollicitudin tempus. Nam eu eleifend felis.
<br/>
<br/>
Sed mattis egestas aliquam. Donec sit amet diam tempor, lobortis mi a, condimentum mi. In eget elit lobortis, imperdiet sem et, sollicitudin lacus. Aliquam consectetur diam nec risus cursus placerat. Aenean congue nunc ac est venenatis aliquam. Donec et tellus leo. In eget malesuada diam. Sed posuere, mi placerat pharetra dapibus, quam dui pretium sem, ac blandit eros ex quis urna. Phasellus pellentesque ut orci id porttitor. Vestibulum quis tortor vulputate, ultricies mauris in, tincidunt nisi. Curabitur fermentum condimentum fringilla.
<br/>
<br/>
Sed consequat suscipit nibh, vitae congue magna lacinia ut. Nulla scelerisque molestie est. Nunc suscipit libero et dignissim lobortis. Etiam sed pellentesque felis. Fusce maximus orci sapien, ut lobortis justo fermentum volutpat. Pellentesque varius tortor ornare mi dictum dictum. Vestibulum ornare augue justo, vel pharetra diam vulputate dapibus. Donec sodales ornare felis ut semper.
<br/>
<br/>
Vivamus a metus vel ante pulvinar convallis eu a ipsum. Etiam aliquam arcu vel mauris tincidunt posuere. Sed in tortor sit amet ante semper tempus. Maecenas sed turpis et odio condimentum eleifend. Praesent dignissim facilisis feugiat. Mauris iaculis urna sed tortor dictum lobortis. Nam commodo, eros eu fringilla lacinia, turpis risus placerat velit, vitae vehicula ex erat at orci. Curabitur blandit ligula sed elit faucibus viverra. Morbi placerat eros justo, nec euismod nunc imperdiet a. Donec ac erat nec erat scelerisque varius in non nibh. Nam elementum consectetur rhoncus. Vestibulum dui magna, iaculis non ipsum vitae, condimentum tempus nisi. Quisque erat nunc, viverra sit amet massa non, pellentesque vehicula dolor. Curabitur accumsan nulla vitae sodales tincidunt. Donec nunc nunc, lacinia ac tortor vel, porttitor imperdiet lectus. Fusce dictum sapien a commodo finibus.
<br/>
<br/>
Quisque mollis lacus tortor. Proin venenatis hendrerit nibh eget gravida. Aliquam rutrum elit ac purus porta varius. Phasellus a imperdiet arcu. Aliquam erat volutpat. Mauris orci massa, congue ultrices enim nec, congue aliquet velit. Nulla libero erat, porttitor non faucibus sit amet, interdum malesuada eros.
`;

const body = document.querySelector('body');
body?.append(texto);

const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
body?.append(progressBar);

// Funcion que haga el calculo
const calcularPorcentajeScroll = (event: any) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;

  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// streams
const scroll$ = fromEvent(document, 'scroll');

const progress$ = scroll$.pipe(map(calcularPorcentajeScroll), tap(console.log));

progress$.subscribe((porcentaje) => {
  progressBar.style.width = `${porcentaje}%`;
});
