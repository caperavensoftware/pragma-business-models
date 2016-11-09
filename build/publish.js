const gulp = require("gulp");
const Publish = require("build-utilities/publish");

gulp.task('publish', ['build:all'], function() {
    const publish = new Publish();

    publish.publish([
        {
            src: ["app/src/index.js"],
            dest: "publish"
        },
        {
            src: ["app/src/lib/**/*.*"],
            dest: "publish/lib"
        },
        {
            src: ["src/lib/**/*.*"],
            dest: "publish/lib"
        },
        {
            src: ["src/types/**/*.*"],
            dest: "publish/types"
        },
        {
            src: ["src/calculator-bo.js"],
            dest: "publish/examples/basic"
        },
        {
            src: ["src/work-order-bo.js", "src/work-order-model.js", "src/work-order-store.js"],
            dest: "publish/examples/workorder"
        }
    ]);

    publish.setPackage({
        src: "package.json",
        dest: "publish/"
    });
});