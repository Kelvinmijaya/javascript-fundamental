// truthy

if ('false') console.log(true);
if ('0') console.log(true);
if ([]) console.log(true);
if ({}) console.log(true);
if (function () { }) console.log(true);



// falsy

if (false) console.log(false);
if (0) console.log(false);
if ('') console.log(false);
if (null) console.log(false);
if (undefined) console.log(false);
if (NaN) console.log(false);