/*Discuss the api’ definitions

I created 3 api's: get_id, free_id and size. 

Get_id(): pops off the last item from the stack array.

Free_id(): adds id to the pool, makes sure that id is not below 1 or above n.
Makes sure that id is not duplicated.

Size(): checks current length of stack array.
*/

/*Data structures
I'm using array like a stack, because im pushing and popping to modify current pool.


Can find this code on here: http://jsfiddle.net/phatCat/tb4t1pwn/3/  (this includes jasmine tests)
*/


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
    
    //added to check pool size for test
    this.size = function() {
        return pool.length;
    };
}

//Test Code (Jasmine)

describe('Create Empty Pool', function() {
    //create empty pool
    var pool = new IdManager(0);
    
    it('Empty pool_size should be 0', function() {
        expect(pool.size()).toEqual(0);
    });
  
    it('Empty pool get_id should be undefined', function() {
        expect(pool.get_id()).toEqual(undefined);
    });
    
    it('Empty pool free_id without number should be undefined', function() {
        pool.free_id();
        expect(pool.size()).toEqual(0);
    });
    
    it('Empty pool free_id with number should be undefined', function() {
        pool.free_id(4);
        expect(pool.size()).toEqual(0);
    }); 
});

describe('Create Pool', function() {
    //create pool of 4
    var pool = new IdManager(4);
    
    it('Empty pool_size should be 4', function() {
        expect(pool.size()).toEqual(4);
    });
  
    it('Pool get_id should be defined', function() {
        expect(pool.get_id()).toBeDefined();
        expect(pool.size()).toEqual(3);
    });
    
    it('Pool free_id with number below 1 should not be added to pool', function() {
        var currentPoolSize = pool.size();
        pool.free_id(0);
        expect(pool.size()).toEqual(currentPoolSize);
    }); 
    
    it('Pool free_id with number above n should not be added to pool', function() {
        var currentPoolSize = pool.size();
        pool.free_id(3);
        expect(pool.size()).toEqual(currentPoolSize);
    });
    
    it('Pool free_id with correct number id should be added to pool', function() {
        var currentPoolSize = pool.size();
        pool.free_id(4);
        expect(pool.size()).toEqual(currentPoolSize+1);
    });
    
    it('Pool free_id with repeating number should not be added to pool', function() {
        var currentPoolSize = pool.size();
        pool.free_id(4);
        expect(pool.size()).toEqual(currentPoolSize);
    });
    
});