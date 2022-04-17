<h2>Motivation</h2>
Developing a typescript project is faster than a javascript project and can scale well. So I will create a typescript project, not a javascript project. But what about an old javascript project? Migrate it. I will migrate a react vite javascript project to react vite ts typescript in this repo. Specifically, I will use my personal website  <a href='https://github.com/NathanKr/nathan-krasney-com'>here.</a>

<h2>Project structure</h2>
<h3>Source directory - original vite js project</h3>
Specifically, I will migrate my <a href='https://github.com/NathanKr/nathan-krasney-com/releases/tag/0.6'>personal website</a> ,which is a react js vite project 
<h3>Target directory - resulting vite ts project</h3>

<h2>Source - Migration steps</h2>
<ol>
<li>Copy the react vite js project - my <a href='https://github.com/NathanKr/nathan-krasney-com/releases/tag/0.6'>personal website</a> in this case. take only the client directory </li>
<li>strip client</li>
<li>install and run to verify ok :

```
npm i 
npm run dev
```

</li>
</ol>

<h2>Target - Migration steps</h2>
<ol>
<li>create react ts vite project

```
npm init vite@latest
choose target as project name
choose react
choose react ts
cd target
npm install
npm run dev
```
</li>
<li>rename src in target to _src and copy src and public from source</li>
<li>perform in target

```
npm uninstall react react-dom
```
</li>
<li>copy dependencies (beside vite) in package.json from source to target</li>
<li>install dependencies in target

```
npm i
```
</li>
<li>rename in target js-->ts , jsx-->tsx</li>
<li>start fix static check errors :
<ul>
fix missing packages types
<li>npm i --save-dev @types/react-router-dom</li>
<li>npm i --save-dev @types/react-helmet</li>
<li>fix components types using : interface , FC and generics 
ClickedTestimonial
Event</li>
<li>fix import image : put in public and replace import with constant ??</li>git ta
<li>add interfaces directory for IEvent ITestimonial json (make it much more understood)</li>
<li>remove serviceWorker - it was not not needed also in source</li>
<li>fix const root = ReactDOM.createRoot( document.getElementById('root')); // >= ver 18</li>
<li>rename index.html in the target to _index.html</li>
<li>copy index.html from source to target and update

```html
   <script type="module" src="/src/index.jsx"></script>
        to
    <script type="module" src="/src/index.tsx"></script>
```

</li>
</ul>
</li>
</ol>
