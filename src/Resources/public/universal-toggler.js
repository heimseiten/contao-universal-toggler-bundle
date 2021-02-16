document.addEventListener("DOMContentLoaded", function(event) {   
	start();
	
	function start() {
		document.querySelector('body').classList.add('toggler_active')
		activateClickToggler('.click_toggler')
		activateViewToggler('.view_toggler')
	}

	function activateViewToggler(togglerClass) {
		document.querySelectorAll(togglerClass+':not(.widget)').forEach(toggler => {
			setInitialStatus(toggler, togglerClass)
			changeOnView(toggler, togglerClass)
		})
	}

	function changeOnView(toggler, togglerClass) { 
		for ( q=0; q<elementsToToggle(toggler).length;q++ ) {
			var cssPath = '.'+elementsToToggle(toggler)[q]+ ':not(' + togglerClass + '):not(.'+elementsToToggle(toggler)[q]+ ' > .'+elementsToToggle(toggler)[q]+')'
		} 
		inViewport(toggler, callbackElement => {
			if (callbackElement.isIntersecting) { 
				switchToActive(true, cssPath)
			 } else { 
				switchToActive(false, cssPath)
			 }
		})
	}

	function inViewport(elem, callback) {
		return new IntersectionObserver(entries => {
			entries.forEach(entry => callback(entry))
		}).observe(elem)
	  }

	function activateClickToggler(togglerClass) {
		document.querySelectorAll(togglerClass+':not(.widget)').forEach(toggler => {
			setInitialStatus(toggler, togglerClass)
			changeOnClick(toggler, togglerClass)
		})
	}

	function changeOnClick(toggler, togglerClass) {  
		toggler.addEventListener('mouseup',e => {
			if ( toggler.querySelector('input.checkbox') ) {
				if (e.path[0].tagName!='LABEL' && e.path[0].tagName!='INPUT') { 
					if (toggler.querySelector('input.checkbox').checked) { 
						toggler.querySelector('input.checkbox').checked = false 
					} else { toggler.querySelector('input.checkbox').checked = true }  
				}
			}
			for ( q=0; q<elementsToToggle(toggler).length;q++ ) {
				var cssPath = '.'+elementsToToggle(toggler)[q]+ ':not(' + togglerClass + '):not(.'+elementsToToggle(toggler)[q]+ ' > .'+elementsToToggle(toggler)[q]+')'
				if ( document.querySelector(cssPath) ) {
					var condition = !document.querySelector(cssPath).classList.contains('t_active')
				}
				switchToActive(condition, cssPath)
			}
		})
	}

	function setInitialStatus(toggler, togglerClass) {  
		for ( t=0; t<elementsToToggle(toggler).length;t++ ) {
			var cssPath = '.'+elementsToToggle(toggler)[t]+ ':not(' + togglerClass + '):not(.'+elementsToToggle(toggler)[t]+ ' > .'+elementsToToggle(toggler)[t]+')'
			if ( toggler.querySelector('input.checkbox') ) {
				switchToActive(toggler.querySelector('input.checkbox').checked,cssPath)
			} else {
				switchToActive(true,cssPath)
			}
		}
	}
	
	function elementsToToggle(element) {  
		var toggleElements = []
		for (i=0; i<element.classList.length;i++) {
			if (element.classList[i].includes('toggle_')) {
				toggleElements.push(element.classList[i])
			}
		}
		return toggleElements;
	  }

	function switchToActive(condition,selector) {
		if ( document.querySelector(selector) ) {
			if (condition) { 
				document.querySelectorAll(selector).forEach(te => {	
					te.classList.add('t_active')
					te.classList.remove('t_inactive') 
				})
			} 
			else { 
				document.querySelectorAll(selector).forEach(te => {	
					te.classList.remove('t_active')
					te.classList.add('t_inactive') 
				})
			}
		}
	}

});