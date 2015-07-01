function IdManager(n){
    var pool = [];
    //create pool
    if(typeof n === "number" && n>0) {
        for (var i=1; i<=n; ++i) {
            pool.push(i);
        }
    }
    
    //get_id
    this.get_id = function() {
        if (pool.length>0) {
            return pool.pop();
        }
        //if pool is empty return nothing
        return;
    };
    
    //free_id
    this.free_id= function(id) {
        if (id<=n && id>0 && pool.indexOf(id) === -1) {
            pool.push(id);
        }  
    };
}