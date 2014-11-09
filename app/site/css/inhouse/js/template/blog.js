<div class="row">
	{{#each blog}}
	    <div class="col-md-12 col-lg-12 col-sm-12 text-center blog" style="display:none;">
		  
		  <a href="" class="text-center">
		  	<h1>
		  		{{title}}
		  	</h1>
		  </a>
			  
			  <div class="row text-center">
		  {{#each entry}}
		  	 
		  	  	<h4>{{header}}</h4>

		  	  	<div class="col-offset-4 col-lg-4">{{sample}}</div>
		  	  
		  {{/each}}
		  </div>

		</div>
	{{/each}}
</div>