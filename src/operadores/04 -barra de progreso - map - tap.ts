import { fromEvent, map, tap } from "rxjs";

const texto = document.createElement("div");

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum tristique tortor venenatis viverra. Suspendisse quis ullamcorper neque, eget aliquam augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus vel nisl at diam imperdiet sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed cursus vestibulum dolor, et ultricies lectus facilisis quis. Aliquam vel sagittis lacus, id imperdiet neque. Mauris ullamcorper quis ante sit amet pharetra. Donec aliquet ornare diam, nec pulvinar turpis maximus a. Curabitur egestas metus sit amet libero consectetur convallis. Praesent non dictum purus, pharetra vestibulum metus. Etiam sit amet tristique quam.

Donec vel neque sollicitudin, scelerisque neque mollis, tincidunt leo. Nullam suscipit dictum magna nec dictum. Vestibulum dapibus urna ut purus blandit ornare. Mauris ac interdum sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Aliquam placerat purus id urna semper, sit amet molestie ante tincidunt. Maecenas vitae orci sed libero laoreet lacinia eu ac sem. Cras eu ex id mi pretium dictum a vitae felis. Maecenas bibendum ex pulvinar sapien efficitur ornare. Sed ultrices nisi eget purus vulputate, sit amet suscipit sapien laoreet. Vivamus eu mi in eros viverra eleifend.

Maecenas ac sapien risus. Mauris dignissim, elit eget posuere hendrerit, purus magna mattis metus, id condimentum dui orci at urna. Vestibulum a nibh libero. Vivamus mattis dui nec nulla posuere tristique. Sed sit amet tincidunt magna. Nam sed sapien pretium, tempus nisl a, dapibus ipsum. Aenean malesuada sapien varius tincidunt suscipit. Aenean vestibulum pulvinar volutpat. Vestibulum lobortis augue at ex facilisis, et rutrum lorem ullamcorper. Sed auctor dui vitae ante rutrum, id sagittis libero lacinia. Aliquam id nisi scelerisque, ultrices est ac, lacinia arcu. Aenean fermentum lorem id nisl tempus rutrum. Duis blandit ligula at purus luctus, eget commodo lectus euismod. Nulla euismod quam eu turpis venenatis, sed interdum odio scelerisque. Aliquam mattis fermentum metus vitae porttitor.

Aliquam in felis quis leo ullamcorper porta. Pellentesque sed risus tempor, sagittis arcu aliquam, rhoncus tortor. Aliquam ultricies nunc eu mauris porta fringilla. Etiam vulputate, elit ut interdum pretium, nunc metus ultricies metus, ut hendrerit elit metus vel arcu. Quisque tempus placerat mauris, quis rutrum eros gravida finibus. Vestibulum eu odio leo. Donec turpis lorem, mollis sit amet efficitur et, cursus feugiat nibh. Praesent posuere lobortis enim a pellentesque. Curabitur fringilla nisl vitae est tristique molestie. Cras commodo in dui id finibus. Aliquam erat volutpat.

Donec cursus gravida libero. Nunc ornare nunc vel tempor placerat. Aliquam blandit ex a lacus aliquet ornare non at libero. Integer tempor sed eros vel facilisis. Etiam maximus faucibus risus non ultrices. Suspendisse ante purus, tincidunt et lacus sit amet, blandit vehicula eros. Aliquam erat volutpat. Pellentesque vulputate nibh nec justo vestibulum egestas. Nam eleifend dolor enim, nec pharetra turpis hendrerit in. Nullam massa risus, viverra et elementum at, tempus nec ipsum. Ut luctus sem ac aliquet laoreet. Suspendisse lectus nibh, viverra sed mauris non, congue dignissim lectus. Nam tempor, arcu eget consequat eleifend, nulla lectus imperdiet mi, non dictum quam augue id ligula. Nulla porttitor vitae nisi sed venenatis.

Duis ornare nulla ac nibh aliquet sodales. Donec eu vulputate magna. Vivamus quis tortor vitae turpis consectetur suscipit non id est. Donec ante neque, ornare non suscipit sed, pharetra nec mauris. Mauris dictum mollis neque. Proin commodo ligula ex, vitae eleifend est tincidunt eu. Donec rutrum laoreet interdum.

Morbi vel turpis eget lectus pellentesque sodales sed sollicitudin nisi. Morbi fermentum a nulla quis convallis. Vestibulum arcu libero, consectetur eu vulputate sed, blandit a nisi. Etiam congue feugiat mattis. Phasellus quis turpis sit amet massa sodales semper. Vestibulum commodo metus sapien, et rhoncus ipsum cursus sit amet. Nunc sed mauris metus. Pellentesque mollis tempor leo a tincidunt. Aliquam sagittis quam sit amet tortor ultrices, sodales ultricies turpis mollis. Pellentesque elementum justo tincidunt gravida bibendum. Sed accumsan cursus magna, vel congue arcu sollicitudin quis. Proin maximus enim non nisl consectetur tincidunt.

Etiam vitae eros sem. Etiam tempor justo in tempor placerat. Aenean a dictum felis. Maecenas ac aliquam nunc. Vestibulum in quam vel nibh ornare faucibus id sit amet massa. Vivamus fringilla non odio quis tempor. Vivamus cursus leo in ligula consectetur tristique. Nam tempus, turpis eu feugiat venenatis, augue mi gravida enim, eget suscipit sapien elit eget massa. Vestibulum at scelerisque nibh. Praesent sollicitudin sodales elementum. Duis molestie posuere nibh, quis vulputate lectus ultricies quis. Duis ut dictum lacus. Etiam semper justo non arcu porttitor, vitae porttitor lorem ullamcorper.

Nullam ultrices pharetra leo, nec convallis odio iaculis vel. Vivamus lacinia, lacus vitae consectetur viverra, justo sapien venenatis dui, eu egestas turpis velit sed purus. Nulla maximus justo quis risus sagittis posuere. Nunc sagittis a sem vitae euismod. Sed blandit purus nec nisl dapibus elementum. Cras vitae luctus sem, at fermentum orci. Praesent non pulvinar tortor. Donec laoreet lorem vel sapien posuere sagittis vel a nisi. Vivamus non velit sit amet diam imperdiet laoreet. Maecenas mi nunc, hendrerit eget erat eget, finibus pharetra enim.

Vivamus maximus enim vitae velit mollis venenatis. Aenean vehicula magna sed mollis luctus. In pretium lectus non imperdiet faucibus. Etiam vel tincidunt dui. Mauris eu nisl turpis. Aenean eget metus tortor. Nam dictum risus ac semper molestie. Sed iaculis erat non velit tristique, at tempus lorem cursus. Duis ac mauris eu justo luctus varius eu vitae est.

Quisque consequat ex at tristique ullamcorper. Cras bibendum ut lectus vel blandit. Vivamus lectus felis, porta id efficitur id, blandit sit amet ipsum. Praesent placerat laoreet scelerisque. Suspendisse consequat eleifend ipsum sodales tincidunt. Ut varius eros fringilla nulla interdum, ut finibus augue accumsan. Vestibulum vel ligula ac quam cursus pulvinar. Curabitur maximus nunc nec ligula consectetur cursus. Proin finibus augue leo, id efficitur odio maximus sed.

In vitae magna eu ex egestas aliquet. Aenean malesuada, nisi quis fermentum accumsan, velit urna condimentum sapien, eget rhoncus leo nulla non metus. Vivamus in tellus ut velit pretium gravida. Nulla egestas lacinia lectus, at viverra mauris cursus vel. Morbi rutrum felis quis laoreet fringilla. Curabitur id tristique libero. Proin gravida scelerisque eros, a finibus orci pellentesque convallis. Pellentesque tempor nisl eu interdum sollicitudin. In sit amet mi vitae eros tempor consequat. Aliquam in magna sodales nibh venenatis hendrerit in aliquet magna. Vivamus at pellentesque arcu. Vivamus maximus rutrum mi.

Integer euismod accumsan lacus quis elementum. Nulla id urna lorem. Aliquam venenatis mollis lacus, et laoreet lacus tristique non. Quisque commodo sodales purus, quis consequat nisi maximus eu. Duis in metus nec erat placerat vehicula consectetur eget nibh. Aliquam egestas blandit arcu. Morbi velit justo, iaculis dapibus elementum id, luctus vel ex. In suscipit quis sapien ut ornare. Integer cursus quam dignissim aliquet laoreet. Fusce id ex tellus. Nam nec rutrum lectus. Suspendisse fringilla lacus quis nibh malesuada, sit amet ornare justo elementum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum egestas eget quam quis tempor.

Mauris efficitur blandit mi, vitae finibus erat pellentesque ut. Suspendisse potenti. Proin lectus neque, vulputate nec mi nec, eleifend congue est. Morbi est libero, accumsan non ligula tincidunt, eleifend condimentum ex. Maecenas quis odio placerat, fringilla metus sed, bibendum nisl. Mauris pellentesque tellus eu purus rhoncus, eu semper turpis bibendum. Nunc finibus eros nec augue auctor elementum. Donec ut ex ullamcorper, ultricies est in, sollicitudin purus. Aenean sem dolor, sollicitudin non arcu et, ultricies porta elit. Integer egestas tempus est, ac pharetra metus cursus et. Aliquam id faucibus nisi. Donec suscipit ultrices eros, ac varius orci facilisis interdum. Cras blandit, justo sit amet vehicula blandit, lectus orci finibus augue, vitae dictum nibh nisl vitae felis. Nullam semper risus dui, quis posuere enim volutpat id.

Donec maximus non diam placerat lacinia. Cras pellentesque ante sit amet lacus laoreet, vitae sodales enim pulvinar. Proin sed quam sed lectus mattis vulputate. Vivamus vel gravida tortor. Nulla imperdiet lacus eget libero fermentum rutrum. Morbi mauris quam, feugiat vel eros sit amet, ultricies molestie mauris. Donec congue sapien tellus, sit amet blandit diam tristique efficitur.

Generated 15 paragraphs, 1323 words, 9022 bytes of Lorem Ipsum
`;

const body = document.querySelector("body");
body.append(texto);

const barraDeProgreso = document.createElement("div");
barraDeProgreso.setAttribute("class", "progress-bar");

body.append(barraDeProgreso);

//lo que haga el cambio del with
function calcularWidth(event): number {
    const { clientHeight, scrollHeight, scrollTop } = event.target.documentElement;

    console.log({ clientHeight, scrollHeight, scrollTop });

    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

//flujo de información
const scroll$ = fromEvent(document, "scroll")
    .pipe(map(calcularWidth), tap(console.log))
    .subscribe((resultado) => (barraDeProgreso.style.width = `${resultado}%`));
