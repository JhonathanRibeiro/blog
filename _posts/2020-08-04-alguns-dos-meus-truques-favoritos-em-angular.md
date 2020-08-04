---
layout: post
author: Jhonathan Ribeiro
title: Alguns dos meus truques favoritos em Angular
description: O Angular vem com muitos recursos, populares e desconhecidos, a
  maneira mais fácil de descobrir truques para realizar tarefas difíceis usando
  o Angular é usar o Angular muito mais e aprender no processo. Aqui estão
  minhas dicas e truques angulares favoritos.
date: 2020-08-03
tags: Dicas Angular
img: /assets/img/angular-banner-post-dicas-e-truques.png
link_font: " "
font_title: " "
ogtitle: Alguns dos meus truques favoritos em Angular
ogtype: article
ogdescription: O Angular vem com muitos recursos, populares e desconhecidos, a
  maneira mais fácil de descobrir truques para realizar tarefas difíceis usando
  o Angular é usar o Angular muito mais e aprender no processo. Aqui estão
  minhas dicas e truques angulares favoritos.
ogimage: /assets/img/angular-banner-post-dicas-e-truques.png
twitter-creator: "@Jhonathanrjb"
twitter-card: summary
twitter-site: "@Jhonathanrjb"
---
O Angular vem com muitos recursos, populares e desconhecidos, a maneira mais fácil de descobrir truques para realizar tarefas difíceis usando o Angular é usar o Angular muito mais e aprender no processo. Aqui estão alguns dos meus truques angulares favoritos.

Angular é uma estrutura JavaScript para criar aplicativos da Web, especialmente aplicativos de página única(Single Pages). Como estrutura, oferece as melhores práticas e ferramentas para desenvolver facilmente esses aplicativos da web. Ao criar com o Angular, você usará modelos declarativos, injeção de dependência etc. para alimentar aplicativos que podem ser executados em todas as plataformas (web, móvel e desktop).

A Angular já descreve suas práticas recomendadas para facilitar o desenvolvimento usando a estrutura, mas pode haver outras dicas que você perdeu que provavelmente tornarão o desenvolvimento mais fácil ou ajudarão o aplicativo a executar e carregar mais rapidamente. Então, aqui estão sete dicas e truques para melhorar as aplicações angulares.

## 1. Use serviços para lidar com efeitos colaterais

Ao criar seu aplicativo, é sempre útil reduzir os efeitos colaterais, como solicitações HTTP, eventos baseados em tempo, etc. Abstraindo-os do componente para os serviços, ajudará a reduzir a complexidade do componente e também garantirá a reutilização do serviço. Um exemplo seria buscar dados de um servidor externo. Você pode buscar dados dentro do seu componente assim:

```typescript
import { Component } from "@angular/core";
    
    @Component({
      selector: 'app-component',
      template: '<ul> <li *ngFor="let item of items">{{item}}</li> </ul>',
    })
    export class AppComponent implements OnInit{
      constructor(private http: HttpClient){
      }
      items = [];
      
      getItems(){
        return this.http.get('http://server.com/items')
      }
      
      ngOnInit(){
        this.getItems.subscribe(items => this.items = items);
      }
    }
```

Esse método usado na busca dos itens é local para o componente e não pode ser reutilizado. Se os itens estiverem sendo buscados em outros componentes, todo esse procedimento será repetido e isso não é muito SECO. Se várias solicitações de rede forem feitas, o componente será coberto com esses métodos. Vamos refatorar este componente para usar um serviço para solicitações externas.

```typescript
@Injectable({
      providedIn: 'root'
    })
    export class ItemService {
      constructor (private http: HttpClient) {}
    
      getItems() {
        return this.http.get('http://server.com/items');
      }
    }
```

Em seguida, faremos uso dele no componente:

```typescript
 import { Component } from "@angular/core";
    
    @Component({
      selector: 'app-component',
      template: '<ul> <li *ngFor="let item of items">{{item}}</li> </ul>',
    })
    export class AppComponent implements OnInit{
      constructor(private itemsService: ItemsService){
      }
      items = [];
      
      ngOnInit(){
        this.itemsServices.getItems().subscribe(items => this.items = items);
      }
    }
```

Este serviço pode ser usado para buscar itens em todo o aplicativo.

## 2. ng add

Este utilitário, introduzido na versão 6 do Angular, pode ser usado para adicionar um pacote publicado ao seu ambiente de trabalho e executar esquemas em segundo plano para atualizar a funcionalidade do seu aplicativo. Ao fazer o download de um pacote usando esse comando, ele também instala dependências extras que precisam ser executadas, como polyfills, etc. Seu aplicativo pode ser convertido em um aplicativo Web progressivo usando operadores de serviço e fornecendo funcionalidade offline usando o comando.

Você pode implementar recursos progressivos de aplicativos da Web em seu aplicativo executando o seguinte comando:

```
ng add @angular/pwa
```

Ou, se você deseja adicionar um toque de Design de Material em seu aplicativo, você pode adicionar a biblioteca de Materiais Angular

```
ng add @angular/material
```

## 3. Componentes da Web

A partir da versão 6 do Angular, você pode desenvolver elementos nativos personalizados que podem ser usados ​​fora do Angular. Isso pode ser feito usando um pacote introduzido pelo Angular chamado [Angular Elements](https://angular.io/guide/elements) ( `@angular/elements`). Este pacote fornece uma maneira `createCustomElements`e polyfills para oferecer suporte a navegadores que não são compatíveis com componentes da Web. Com este pacote, você pode empacotar seus componentes favoritos e usá-los em outras estruturas, como React, Vue etc.

Para começar a criar elementos nativos personalizados no Angular, instale o pacote Angular Elements no seu aplicativo usando o seguinte comando:

```
ng add @angular/elements --name=<your_project_name>
```

Você pode seguir o [tutorial](https://angular.io/guide/elements#example-a-popup-service) rápido na documentação oficial do Angular para começar.

## 4. Aliases para declarações de importação

Esse recurso muito útil é suportado imediatamente no Angular. Tenho certeza de que você encontrou instâncias em que as importações em seus aplicativos são confusas e difíceis de ler. Você tem algo como:

```typescript
import { ThatComponent } from '../../../components/this-component/child-component'
    import { ThisService } from '../../../../services/this-service'
```

Tenho certeza de que seria mais útil ter aliases para os caminhos `components`e `services`- isso tornaria essas importações relativamente fáceis de ler e importar.

Ao trabalhar com o React, pesquisei como conseguir isso, mas a maioria das soluções envolve a ejeção do aplicativo, o que não parece realmente agradável. Bem, para conseguir isso em seu aplicativo Angular, tudo que você precisa fazer é atualizar o `tsconfig.json`arquivo:

```javascript
{
      "compileOnSave": false,
      "compilerOptions": {
        "baseUrl": "src",
        "paths": {
          "@components": "app/components",
          "@services": "app/services",
        },
        "..."
      }
    }
```

O que aconteceu aqui é que o valor padrão da `baseUrl`propriedade `./`foi atualizado para apontar para o `src`diretório. Em seguida, adicionamos uma nova propriedade chamada `paths`, que é um objeto que contém pares de valores-chave que representam aliases definidos para caminhos em nosso aplicativo. Aliases foram definidos para a `components`pasta e a `services`pasta. Agora, se quisermos tentar as importações no exemplo anterior, faremos isso:

```typescript
import { ThatComponent } from '@components/this-component/child-component';
    import { ThisService } from '@services/this-service';
```

Isso é muito mais limpo e fácil de ler do que o exemplo anterior. Se você ainda não inicializou o editor para fazer isso para o seu aplicativo, deve fazê-lo.

## 5. Operador de navegação segura para interpolação de strings

Ao trabalhar com objetos em modelos angulares, você encontra situações em que variáveis ​​são declaradas sem valores padrão - a variável é apresentada apenas como uma definição de tipo. Ao tentar acessar uma propriedade na variável que não está prontamente disponível, o Angular gera um erro dizendo que a variável não está definida.

Por exemplo, seu modelo fica assim, você está lendo a `name`propriedade de um `student`objeto:

```
<p>{ { student. name } }</p>
```

E foi assim que a variável foi declarada no arquivo de componente:

```typescript
 interface Student {
      name: String;
      age: Number:
    }
    
    @Component({
      selector: 'app-component',
    })
    export class AppComponent{
      student: Student;
    }
```

Angular lançará um erro aqui.

Usando o operador de navegação segura, podemos salvaguardar a `name`propriedade contra qualquer `null`e `undefined`valores. O operador de navegação segura no Angular é essa sintaxe `?.`, e podemos atualizar o modelo para usar isso:

```

<p> { {student?.name } } </p>
```

Quando você executa isso, o Angular não gera nenhum erro e seu console está limpo. Outra técnica útil para evitar esse erro é usar o `&&`operador and ( ) para verificar se o valor existe antes de ler o caminho da propriedade. Podemos atualizar o exemplo para usar esta sintaxe:

```
<p> { {student && student.name } } </p>
```

Se o valor não existir, o Angular evitará avaliar a expressão e nada será renderizado entre as tags.

## 6. Manipule os erros corretamente com um manipulador de erros

O Angular vem com um serviço de tratamento de exceções que pode ser usado para gerenciar erros em todo o aplicativo. Quando o serviço detecta erros, ele captura o erro e o registra no console. Esse serviço pode ser estendido para adicionar recursos adicionais exclusivos ao nosso aplicativo, como registrar o erro usando uma plataforma de monitoramento de erros ou enviar os erros ao seu servidor para análise.

O Manipulador de Erros é muito fácil de estender: precisamos criar um `class`que estenda as propriedades do `ErrorHandler`e substitua o `handleError`método interno usado para exibir erros.

Crie um arquivo chamado `error-handler.class.ts`:

```typescript
import {ErrorHandler} from '@angular/core';
    // A fake error monitoring library
    import ErrorClient from '@error-reporters/core';
    
    // Initialize the report library
    const reporter = new ErrorClient();
    
    export class AppErrorHandler extends ErrorHandler {
        constructor(private errorService: ErrorService){
            super(false);
        }
    
        public handleError(error: any): void {
            reporter.sendReport(error)
            super.handleError(error);
        }
    }
```

No snippet acima, usamos uma biblioteca de relatório e monitoramento de erros fictícios chamada `@error-reporters`. Após estender o `ErrorHandler`serviço, reportaremos erros que emanam do aplicativo no `handleError`método antes de manipular o erro com o `handleError`método ErrorHandler .

Depois disso, devemos registrar nosso costume `AppErrorHandler`em`app.module.ts:`

```typescript
@NgModule({
        declarations: [ AppComponent ],
        imports: [ BrowserModule ],
        bootstrap: [ AppComponent ],
        providers: [
            {provide: ErrorHandler, useClass: AppErrorHandler}
        ]
    })
```

Você pode ler mais sobre o manipulador de erros padrão da Angular [aqui](https://angular.io/api/core/ErrorHandler) .

## 7. Componentes não vitais de carga preguiçosa

Ao trabalhar em aplicativos razoavelmente grandes ou ao iniciar um, será útil garantir que os componentes não necessários para a renderização inicial do aplicativo sejam carregados com preguiça. Preguiçoso carregado no sentido de que eles são carregados sob demanda. Por exemplo, quando um usuário sai da visualização inicial do aplicativo, é feita uma solicitação de rede para carregar a rota de destino. O carregamento lento pode reduzir efetivamente o tamanho do pacote do seu aplicativo, reduzindo assim o tempo de carregamento do aplicativo no navegador.

Os componentes de carregamento preguiçoso começam com a criação de um módulo de recurso em seu aplicativo, o módulo de recurso abrigará os componentes, serviços, fornecedores, etc. O módulo de recurso é carregado no módulo de roteamento raiz do aplicativo. Veja o exemplo abaixo:

```typescript
import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FeatureRoutingModule } from './feature-routing.module';
    import { FeatureComponent } from './feature/feature.component';
    
    @NgModule({
      imports: [
        CommonModule,
        FeatureRoutingModule
      ],
      declarations: [FeatureComponent]
    })
    export class FeatureModule { }
```

Este módulo de recurso `FeatureModule`contém um único componente `FeatureComponent`e um módulo de roteamento `FeatureRoutingModule`anexado a ele.

Para carregar preguiçosamente esse componente, registraremos o módulo de roteamento do módulo de recurso no módulo raiz do aplicativo:

```typescript
import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { BrowserModule } from '@angular/platform-browser';
    import { RouterModule } from '@angular/router';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
          {
            path: 'feature',
            loadChildren: './feature/feature.module#FeatureModule'
          }
        ])
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
```

Com esta etapa simples, um pacote separado será criado além do pacote principal de aplicativos. Este pacote será carregado quando o usuário navegar para a `/feature`rota. A experiência pode ser um pouco desagradável, pois o usuário precisará aguardar o carregamento do pacote da rota e isso pode demorar um pouco, dependendo do tamanho do pacote.

Para corrigir esse problema, buscaremos os outros pacotes configuráveis ​​em segundo plano assim que a página inicial tiver sido totalmente carregada. Podemos fazer isso usando um sinalizador interno fornecido pela Angular chamado `preloadStrategy`. Isso informa ao Angular qual estratégia usar ao carregar pacotes preguiçosos.

Vamos atualizar a implementação atual para usar a `PreloadAllModules`estratégia:

```typescript
 import { NgModule } from '@angular/core';
    ...
    import { RouterModule, PreloadAllModules } from '@angular/router';
    
    import { AppComponent } from './app.component';
    
    @NgModule({
      declarations: [
       ...
      ],
      imports: [
        ...
        RouterModule.forRoot([
          {
            path: 'feature',
            loadChildren: './feature/feature.module#FeatureModule'
          }
        ], {preloadStrategy: PreloadAllModules})
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
```

Com esta atualização, o Angular manipulará a pré-busca de pacotes de recursos em segundo plano para facilitar a navegação.

## Conclusão

Angular é uma estrutura que significa que tem o seu jeito de fazer as coisas e produzir resultados. Ele vem com muitos recursos populares e desconhecidos. A maneira mais fácil de descobrir truques para realizar tarefas difíceis usando o Angular é usar o Angular muito mais e pesquisar mais no processo. As dicas e truques listados acima não cobrem totalmente a extensão do que pode ser feito usando os extensos recursos do Angular.