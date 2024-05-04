install: 
	npm ci

brain-games:
	bin/brain-games.js

brain-even:
	bin/brain-even.js

brain-calc:
	bin/brain-calc.js

brain-gcd:
	bin/brain-calc.js

brain-prime:
	bin/brain-prime.js

brain-progression:
	bin/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
