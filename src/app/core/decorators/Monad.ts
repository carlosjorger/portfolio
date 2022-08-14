export function Monad<T>(){
    const dictionary=new Map<T,{}>();
    function wrapper(target: Object, propertyKey: string, descriptor: PropertyDescriptor){ 
        
        // we first cache the original method implementation
        const originalMethod = descriptor.value; 
        // then we overwrite it with a new implementation,
        // ...args represent the original arguments 
       
        descriptor.value = 
            function (...args: T[]) { 
                if (dictionary.has(args[0])) {
                    return dictionary.get(args[0]);
                }
                const result = originalMethod.apply(this, args);

                dictionary.set(args[0],result);

                return result;
                } 
        
        return descriptor;
    };
    return wrapper
};


// export function Monad() : MethodDecorator {
//     return function(target: Function, key: string, descriptor: any) {

//         const originalMethod = descriptor.value; 
    
//         descriptor.value =  function (...args: any[]) {
//           // invoke original function
//           const result = originalMethod.apply(this, args);
    
//           // invoke log event function
//           logEvent({
//             eventName: "logMe",
//             eventData: {
//               args: args,
//               result: result, // now we are also able to track result;
//             },
//           });
    
//           // return result for original function
//           return result;
//         }
    
//         // return wrapped up function
//         return descriptor;
//       }
// }