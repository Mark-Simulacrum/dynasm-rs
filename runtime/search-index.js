var searchIndex = {};
searchIndex["dynasmrt"] = {"doc":"","items":[[3,"AssemblyOffset","dynasmrt","A struct representing an offset into the assembling buffer of a `DynasmLabelApi` struct. The wrapped `usize` is the offset from the start of the assembling buffer in bytes.",null,null],[12,"0","","",0,null],[3,"DynamicLabel","","A dynamic label",null,null],[3,"ExecutableBuffer","","A structure holding a buffer of executable memory",null,null],[3,"Executor","","A read-only shared reference to the executable buffer inside an Assembler. By locking it the internal `ExecutableBuffer` can be accessed and executed.",null,null],[0,"x64","","",null,null],[3,"Assembler","dynasmrt::x64","This struct is an implementation of a dynasm runtime. It supports incremental compilation as well as multithreaded execution with simultaneous compilation. Its implementation ensures that no memory is writeable and executable at the same time.",null,null],[3,"AssemblyModifier","","This struct is a wrapper around an `Assembler` normally created using the `Assembler.alter` method. Instead of writing to a temporary assembling buffer, this struct assembles directly into an executable buffer. The `goto` method can be used to set the assembling offset in the `ExecutableBuffer` of the assembler (this offset is initialized to 0) after which the data at this location can be overwritten by assembling into this struct.",null,null],[3,"UncommittedModifier","","This struct is a wrapper around an `Assembler` normally created using the `Assembler.alter_uncommitted` method. It allows the user to edit parts of the assembling buffer that cannot be determined easily or efficiently in advance. Due to limitations of the label resolution algorithms, this assembler does not allow labels to be used.",null,null],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Create a new `Assembler` instance",1,{"inputs":[],"output":{"name":"assembler"}}],[11,"new_dynamic_label","","Create a new dynamic label that can be referenced and defined.",1,{"inputs":[{"name":"self"}],"output":{"name":"dynamiclabel"}}],[11,"alter","","To allow already committed code to be altered, this method allows modification of the internal ExecutableBuffer directly. When this method is called, all data will be committed and access to the internal `ExecutableBuffer` will be locked. The passed function will then be called with an `AssemblyModifier` as argument. Using this `AssemblyModifier` changes can be made to the committed code. After this function returns, any labels in these changes will be resolved and the `ExecutableBuffer` will be unlocked again.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"alter_uncommitted","","Similar to `Assembler::alter`, this method allows modification of the yet to be committed assembing buffer. Note that it is not possible to use labels in this context, and overriding labels will cause corruption when the assembler tries to resolve the labels at commit time.",1,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"commit","","Commit the assembled code from a temporary buffer to the executable buffer. This method requires write access to the execution buffer and therefore has to obtain a lock on the datastructure. When this method is called, all labels will be resolved, and the result can no longer be changed.",1,{"inputs":[{"name":"self"}],"output":null}],[11,"finalize","","Consumes the assembler to return the internal ExecutableBuffer. This method will only fail if an `Executor` currently holds a lock on the datastructure, in which case it will return itself.",1,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"reader","","Creates a read-only reference to the internal `ExecutableBuffer` that must be locked to access it. Multiple of such read-only locks can be obtained at the same time, but as long as they are alive they will block any `self.commit()` calls.",1,{"inputs":[{"name":"self"}],"output":{"name":"executor"}}],[11,"offset","","",1,{"inputs":[{"name":"self"}],"output":{"name":"assemblyoffset"}}],[11,"push","","",1,{"inputs":[{"name":"self"},{"name":"u8"}],"output":null}],[11,"align","","",1,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"global_label","","",1,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"global_reloc","","",1,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[11,"dynamic_label","","",1,{"inputs":[{"name":"self"},{"name":"dynamiclabel"}],"output":null}],[11,"dynamic_reloc","","",1,{"inputs":[{"name":"self"},{"name":"dynamiclabel"},{"name":"u8"}],"output":null}],[11,"local_label","","",1,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"forward_reloc","","",1,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[11,"backward_reloc","","",1,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"extend","","",1,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"goto","","Sets the current modification offset to the given value",2,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":null}],[11,"check","","Checks that the current modification offset is not larger than the specified offset. If this is violated, it panics.",2,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":null}],[11,"check_exact","","Checks that the current modification offset is exactly the specified offset. If this is violated, it panics.",2,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":null}],[11,"offset","","",2,{"inputs":[{"name":"self"}],"output":{"name":"assemblyoffset"}}],[11,"push","","",2,{"inputs":[{"name":"self"},{"name":"u8"}],"output":null}],[11,"align","","",2,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"global_label","","",2,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"global_reloc","","",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[11,"dynamic_label","","",2,{"inputs":[{"name":"self"},{"name":"dynamiclabel"}],"output":null}],[11,"dynamic_reloc","","",2,{"inputs":[{"name":"self"},{"name":"dynamiclabel"},{"name":"u8"}],"output":null}],[11,"local_label","","",2,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"forward_reloc","","",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[11,"backward_reloc","","",2,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[11,"extend","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"extend","","",2,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"goto","","Sets the current modification offset to the given value",3,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":null}],[11,"check","","Checks that the current modification offset is not larger than the specified offset. If this is violated, it panics.",3,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":null}],[11,"check_exact","","Checks that the current modification offset is exactly the specified offset. If this is violated, it panics.",3,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":null}],[11,"offset","","",3,{"inputs":[{"name":"self"}],"output":{"name":"assemblyoffset"}}],[11,"push","","",3,{"inputs":[{"name":"self"},{"name":"u8"}],"output":null}],[11,"extend","","",3,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"extend","","",3,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[8,"DynasmApi","dynasmrt","This trait represents the interface that must be implemented to allow the dynasm preprocessor to assemble into a datastructure.",null,null],[10,"offset","","Report the current offset into the assembling target",4,{"inputs":[{"name":"self"}],"output":{"name":"assemblyoffset"}}],[10,"push","","Push a byte into the assembling target",4,{"inputs":[{"name":"self"},{"name":"u8"}],"output":null}],[11,"push_i8","","Push a signed byte into the assembling target",4,{"inputs":[{"name":"self"},{"name":"i8"}],"output":null}],[11,"push_i16","","Push a signed word into the assembling target",4,{"inputs":[{"name":"self"},{"name":"i16"}],"output":null}],[11,"push_i32","","Push a signed doubleword into the assembling target",4,{"inputs":[{"name":"self"},{"name":"i32"}],"output":null}],[11,"push_i64","","Push a signed quadword into the assembling target",4,{"inputs":[{"name":"self"},{"name":"i64"}],"output":null}],[11,"runtime_error","","This function is called in when a runtime error has to be generated. It panics.",4,null],[8,"DynasmLabelApi","","This trait extends DynasmApi to not only allow assembling, but also labels and various directives",null,null],[10,"align","","Push nops until the assembling target end is aligned to the given alignment",5,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[10,"local_label","","Record the definition of a local label",5,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[10,"global_label","","Record the definition of a global label",5,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[10,"dynamic_label","","Record the definition of a dynamic label",5,{"inputs":[{"name":"self"},{"name":"dynamiclabel"}],"output":null}],[10,"forward_reloc","","Record a relocation spot for a forward reference to a local label",5,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[10,"backward_reloc","","Record a relocation spot for a backward reference to a local label",5,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[10,"global_reloc","","Record a relocation spot for a reference to a global label",5,{"inputs":[{"name":"self"},{"name":"str"},{"name":"u8"}],"output":null}],[10,"dynamic_reloc","","Record a relocation spot for a reference to a dynamic label",5,{"inputs":[{"name":"self"},{"name":"dynamiclabel"},{"name":"u8"}],"output":null}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"assemblyoffset"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"assemblyoffset"}],"output":{"name":"ordering"}}],[11,"hash","","",0,null],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",6,{"inputs":[{"name":"self"}],"output":{"name":"dynamiclabel"}}],[11,"eq","","",6,{"inputs":[{"name":"self"},{"name":"dynamiclabel"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"self"},{"name":"dynamiclabel"}],"output":{"name":"bool"}}],[11,"hash","","",6,null],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"ptr","","Obtain a pointer into the executable memory from an offset into it. When an offset returned from `DynasmLabelApi::offset` is used, the resulting pointer will point to the start of the first instruction after the offset call, which can then be jumped or called to divert control flow into the executable buffer. Note that if this buffer is accessed through an Executor, these pointers will only be valid as long as its lock is held. When no locks are held, The assembler is free to relocate the executable buffer when it requires more memory than available.",7,null],[11,"deref","","",7,null],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"executor"}}],[11,"lock","","Gain read-access to the internal `ExecutableBuffer`. While the returned guard is alive, it can be used to read and execute from the `ExecutableBuffer`. Any pointers created to the `Executablebuffer` should no longer be used when the guard is dropped.",8,{"inputs":[{"name":"self"}],"output":{"name":"rwlockreadguard"}}],[14,"Pointer","","This macro takes a *const pointer from the source operand, and then casts it to the desired return type. this allows it to be used as an easy shorthand for passing pointers as dynasm immediate arguments.",null,null],[14,"MutPointer","","Preforms the same action as the `Pointer!` macro, but casts to a *mut pointer.",null,null]],"paths":[[3,"AssemblyOffset"],[3,"Assembler"],[3,"AssemblyModifier"],[3,"UncommittedModifier"],[8,"DynasmApi"],[8,"DynasmLabelApi"],[3,"DynamicLabel"],[3,"ExecutableBuffer"],[3,"Executor"]]};
initSearch(searchIndex);
var path = $(".location").text();
var nest_count;
if (path) {
    nest_count = path.split("::").length + 1;
} else {
    nest_count = 1;
}

var base_path = "";
for (i = 0; i < nest_count; i++) {
    base_path += "../";
}

$(".sidebar").prepend('\
  <p class="location">\
      <a href="' + base_path + 'language/index.html">dynasm-rs</a>\
  </p>\
  <div class = "block modules">\
  <h3>Components</h3>\
    <ul>\
      <li>\
        <a href="' + base_path + 'language/index.html">Syntax</a>\
      </li>\
      <li>\
        <a href="' + base_path + 'plugin/dynasm/index.html">Plugin (dynasm)</a>\
      </li>\
      <li>\
        <a href="' + base_path + 'runtime/dynasmrt/index.html">Runtime (dynasmrt)</a>\
      </li>\
    </ul>\
  </div>');