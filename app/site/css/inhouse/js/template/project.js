<div class="row">
		{{#each projects}}
		    <div class="col-md-3 col-lg-3 col-sm-12 text-center project" style="display:none;">
			  <a href="">
			  	<h1>
				  {{title}}
				</h1>
			  </a>
			  <div class="body" style="margin-bottom:10px;">
			    {{description}}
			  </div>
			  {{#each people}}
				<a style="border-radius:5px;border:1px solid #ddd;padding:2px;margin:2px;background-color:#428bca;color:white;" href="{{link}}">{{name}}</a>
			  {{/each}}
			</div>
		{{/each}}
	</div>
</script>