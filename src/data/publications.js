export const publications = {
	sectionTitle: '',
	icon: null,
	description: null,
	list: [
		{
			title: 'Blockchain-based Edge Computing for Deep Neural Network Applications',
			authors: 'Jae-Yun Kim, Soo-Mook Moon',
			description: 'Deep neural network (DNN) applications require heavy computations, so an embedded device with limited hardware such as an IoT device cannot run the apps by itself. One solution is to offload DNN computations from the client device to nearby edge servers to request an execution of the DNN computations with their powerful hardware. However, there are several issues with the solution. One is an availability issue that how we can provide the edge server with some incentives to run the client’ apps. The other is a scalability issue that how we can use more servers when there are more DNN requests. Finally, there is an integrity issue that how the client can trust the result coming from anonymous edge servers. We think the blockchain technology can solve these issues to make edge computing more practical. This paper proposes a novel architecture for DNN edge computing based on the blockchain technology. Existing blockchains such as Ethereum do not support execution of a complex program, so we propose a modified blockchain structure and protocol to overcome the limitation.',
			publish: 'INTESA in ESWEEK 2018',
			paperLink: 'http://intesa-workshop2018.polimi.it/program.html',
			category: 'Blockchain',
			date: 'Oct. 2018'
		},
		{
			title: 'Fast Snapshot Migration using Static Code Instrumentation',
			authors: 'Jae-Yun Kim, Hyeon-Jae Lee, Soo-Mook Moon',
			description: 'Due to the portability advantage of web apps, we can easily save the app execution state at a device and restore it at another device, allowing app migration. Since the execution of the application includes JavaScript internal states such as closures or event handlers, how to extract them is an issue. One approach is having the browser to provide new APIs, which allows fast migration, but requires modification of the browser. The other approach is instrumenting the web app source code, which allows using the existing browser, however, suffering from the performance slowdown due to the overhead of instrumented code. This paper proposes a new instrumentation-based approach, which performs faster. The key idea is to introduce a reference table which is used to keep information of closures and event handlers at runtime by our instrumented code whose overhead is small. The reference table can be easily serialized as JavaScript code, and its execution at the target device allows efficient restoration of the execution state. Our preliminary experimental result shows that the performance of our instrumented code is almost the same as the original code.',
			publish: 'EMSOFT in ESWEEK 2018',
			paperLink: 'https://esweek.org/event-details?id=262-EM-2-C',
			category: 'Web',
			date: 'Oct. 2018'
		},
		{
			title: 'Exceptionization: A Java VM Optimization for Non-Java Languages',
			authors: 'Byung-Sun Yang, Jae-Yun Kim, Soo-Mook Moon',
			description: 'Java virtual machine (JVM) has recently evolved into a general-purpose language runtime environment to execute popular programming languages such as JavaScript, Ruby, Python, and Scala. These languages have complex non-Java features, including dynamic typing and first-class function, so additional language runtimes (engines) are provided on top of the JVM to support them with bytecode extensions. Although there are high-performance JVMs with powerful just-in-time (JIT) compilers, running these languages efficiently on the JVM is still a challenge.\nThis article introduces a simple and novel technique for the JVM JIT compiler called exceptionization to improve the performance of JVM-based language runtimes. We observed that the JVM executing some non-Java languages encounters at least 2 times more branch bytecodes than Java, most of which are highly biased to take only one target. Exceptionization treats such a highly biased branch as some implicit exception-throwing instruction. This allows the JVM JIT compiler to prune the infrequent target of the branch from the frequent control flow, thus compiling the frequent control flow more aggressively with better optimization. If a pruned path were taken, then it would run like a Java exception handler, that is, a catch block. We also devised de-exceptionization, a mechanism to cope with the case when a pruned path is executed more often than expected.\nSince exceptionization is a generic JVM optimization, independent of any specific language runtime, it would be generally applicable to other language runtimes on the JVM. Our experimental result shows that exceptionization accelerates the performance of several non-Java languages. For example, JavaScript-on-JVM runs faster by as much as 60% and by 6% on average, when experimented with the Octane benchmark suite on Oracle’s latest Nashorn JavaScript engine and HotSpot 1.9 JVM. Furthermore, the performance of Ruby-on-JVM shows an improvement by as much as 60% and by 6% on average, while Python-on-JVM improves by as much as 6% and by 2% on average. We found that exceptionization is more effective to apply to the branch bytecode of the language runtime itself than the bytecode corresponding to the application code or the bytecode of the Java class libraries. This implies that the performance benefit of exceptionization comes from better JIT compilation of the language runtime of non-Java languages.',
			publish: 'TACO, HIPEAC 2018',
			paperLink: 'https://www.hipeac.net/2018/manchester/paper-track/',
			category: 'Web',
			date: 'Apr. 2017'
		}
	]
};

//TODO: category

export default publications;
