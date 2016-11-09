const gulp = require("gulp");
const Publish = require("build-utilities/publish");

gulp.task('publish', ['build:all'], function() {
    const publish = new Publish();

    publish.publish([
        {
            src: ["app/src/lib/**/*.*"],
            dest: "publish"
        }
    ]);

    publish.setPackage({
        src: "package.json",
        dest: "publish/"
    });
});