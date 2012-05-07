.PHONY: clean

SRCS = src/header.js                 \
       src/aristocrat.js

build: $(SRCS)
	mkdir -p build
	cat $(SRCS) >build/aristocrat.js
	jsmin <build/aristocrat.js >build/aristocrat-tmp.js
	cat src/header.js build/aristocrat-tmp.js >build/aristocrat-min.js
	rm build/aristocrat-tmp.js

clean:
	rm -rf build
