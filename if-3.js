function f(a,b,c,d){
if (a>b && c>d) if (a<c) return a;
	else return c;
if (a<b && c>d) if (b<c) return b;
	else return c;
if (a>b && c<d) if (a<d) return a;
	else return d;
if (a<b && c<d) if (b<d) return b;
	else return d;
}

module.exports = f;
