<h1>ExpressJS Deep Dive</h1>
<h2>Tasks done in step 5</h2>
<ul>
<li>default endpoint "/" displays message in json format</li>
<li>"api/users" endpoint displays the users</li>
<li>"api/users/${id}" endpoint displays a specified user</li>
<li>"api/products" endpoint displays the products</li>
<li>"api/products/${name}" endpoint displays a named product</li>
<li>"api/products/${id}" endpoint displays a specified product</li>
<li>"api/products/${name}" endpoint displays a named product. Solved by:</li>
<ol>
<li>Checking whether the param is a number or a string</li>
<li>Filtering accordingly</li>
<li>Returning proper errors</li>
<li>Avoiding repeated isNaN checks</li>
</ol>
<li>Branch "step005" now exists in GitHub repo</li>
<p>Now create and switch to "step006" branch</p>