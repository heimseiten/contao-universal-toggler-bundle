start()

function start() {
	document.querySelector('body').classList.add('toggler_active')
	activateClickToggler('.click_toggler')
	activateViewToggler('.view_toggler')
	activateSelectToggler('.select_toggler')
	calculateHeightOfToggleElement()
	window.addEventListener('resize', e => {
		calculateHeightOfToggleElement()
	}, true)
}

function calculateHeightOfToggleElement() {
	document.querySelectorAll( '[class*=toggle_], .click_toggler, .view_toggler'  ).forEach(toggle_element => {
		toggle_element.setAttribute( 'style', 'height: auto; visibility: hidden;')
		const element_height = toggle_element.clientHeight 
		toggle_element.setAttribute( 'style', '--element_height:' + element_height + 'px')
	})
}

function activateClickToggler(togglerClass) {
	document.querySelectorAll(togglerClass+':not(.widget)').forEach(toggler => {
		setInitialStatus(toggler, togglerClass)
		toggler.addEventListener('mouseup',e => {
			toggler.classList.toggle('activated')
			changeCheckboxStatus(toggler)
			for ( let i=0; i<toggleElements(toggler).length; i++ ) {
				const elementSelector = builtElementSelector(togglerClass, toggleElements(toggler)[i])
				if ( document.querySelector(elementSelector) ) {
					var condition = !document.querySelector(elementSelector).classList.contains('toggle_status_initial')
				}
				setActiveState(condition, elementSelector)
			}
		})	
	})
}

function activateViewToggler(togglerClass) {
	document.querySelectorAll(togglerClass+':not(.widget)').forEach(toggler => {
		setInitialStatus(toggler, togglerClass)
		for ( let i=0; i<toggleElements(toggler).length; i++ ) {
			const elementSelector = builtElementSelector(togglerClass, toggleElements(toggler)[i])
			inViewport(toggler, callbackElement => {
				if (callbackElement.isIntersecting) { 
					setActiveState(false, elementSelector)
				 } else { 
					setActiveState(true, elementSelector)
				 }
			})		
		}	
	})
}

function inViewport(elem, callback) {
	return new IntersectionObserver(entries => {
		entries.forEach(entry => callback(entry))
	}).observe(elem)
}

function activateSelectToggler(togglerClass) {
	document.querySelectorAll(togglerClass+':not(.widget)').forEach(toggler => {
		toggler.classList.add('toggle_'+ toggler.value)
		setInitialStatus(toggler, togglerClass)
		toggler.addEventListener('change',e => {			
			for ( let i=0; i<toggleElements(toggler).length; i++ ) {
				const elementSelector = builtElementSelector(togglerClass, toggleElements(toggler)[i])
				if ( document.querySelector(elementSelector) ) {
					setActiveState(false, elementSelector)
				}	
			}
	
			for ( let i=0; i<e.target.classList.length; i++) {
				if (e.target.classList[i].includes('toggle_')) {
					e.target.classList.remove(e.target.classList[i])
				}
			}
	
			toggler.classList.add('toggle_'+ toggler.value)
	
			for ( let i=0; i<toggleElements(toggler).length; i++ ) {
				const elementSelector = builtElementSelector(togglerClass, toggleElements(toggler)[i])
				if ( document.querySelector(elementSelector) ) {
					setActiveState(true, elementSelector)
				}	
			}
	
		})
	})
}

function setInitialStatus(toggler, togglerClass) {
	for ( let t=0; t<toggleElements(toggler).length; t++ ) {
		const elementSelector = builtElementSelector(togglerClass, toggleElements(toggler)[t])
		if ( toggler.querySelector('input.checkbox') ) {
			setActiveState(toggler.querySelector('input.checkbox').checked, elementSelector)
		} else {
			setActiveState(true, elementSelector)
		}
	}
}

function toggleElements(element) {  
	var toggleElements = []
	for (i=0; i<element.classList.length;i++) {
		if (element.classList[i].includes('toggle_')) {
			toggleElements.push(element.classList[i])
		}
	}
	return toggleElements;
}

function setActiveState(condition,selector) {
	if ( document.querySelector(selector) ) {
		document.querySelectorAll(selector).forEach( e => {
			switch (condition) {
				case true:  		
					e.classList.add('toggle_status_initial')
					e.classList.remove('toggle_status_toggled')
					// in case of Contao forms
					if (e.querySelector('label')) {
						if (e.querySelector('label').classList.contains('toggle_status_toggled')) {
							e.querySelector('label').classList.remove('toggle_status_toggled')
						}
					}
					if (e.querySelector('input:not([type="hidden"])')) {
						if (e.querySelector('input:not([type="hidden"])').classList.contains('toggle_status_toggled')) {
							e.querySelector('input:not([type="hidden"])').classList.remove('toggle_status_toggled')
						}
					}
					break
				case false:
					e.classList.remove('toggle_status_initial')
					e.classList.add('toggle_status_toggled') 
					break
				default:
					break
			}
		})
	}
}

function changeCheckboxStatus(toggler) {
	if ( toggler.querySelector('input.checkbox') ) {
		if (e.path[0].tagName!='LABEL' && e.path[0].tagName!='INPUT') { 
			if (toggler.querySelector('input.checkbox').checked) { 
				toggler.querySelector('input.checkbox').checked = false 
			} else { toggler.querySelector('input.checkbox').checked = true }  
		}
	}
}

function builtElementSelector(togglerClass, toggleElementsClass) {
	// return '.toggle_123:not(.click_Toggler):not( .toggle_123 > .toggle_123 )
	   return '.' + toggleElementsClass + ':not(' + togglerClass + '):not(.' + toggleElementsClass + ' > .' + toggleElementsClass + ')'
   }
   
