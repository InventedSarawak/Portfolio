<script lang="ts">
    import SectionWrapper from "./SectionWrapper.svelte";
	import TypingEffect from "./TypingEffect.svelte";
</script>

<SectionWrapper id='HomePage'>
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 pb-10 pt-20 md:pb-14 lg:pb-60 mx-auto w-full">
        <!-- Text Section -->
        <div class="flex-1 md:flex-[3] text-center md:text-left">
            <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-7xl max-w-[1200px] mx-auto w-full font-semibold">
                <span class="text-indigo-400">I</span>
                 am 
                 <span class="text-indigo-400">Vedant Kesarwani.</span>
                 <br />
                 A<TypingEffect />
            </h2>
        
        </div>
        <!-- Image Section -->
        <div class="flex-1 flex flex-col items-center">
            <img src="src\assets\images\ProfileImage2.JPG" alt="Vedant Kesarwani" class="w-full h-auto rounded-lg shadow-lg -ml-20 mb-4 transform transition-transform duration-300 hover:scale-105 border-indigo-400 border-4" />
            <h2 class="text-xl font-semibold text-center">Vedant Kesarwani</h2>
            <p class="text-gray-600 text-center">Frontend Developer | Photographer</p>
        </div>
    </div>
    <h1 class="text-4xl font-semibold mb-4 text-indigo-400">Hello, I am Vedant 👋</h1>
    <section class="gap-40">
        <div class="mb-4 text-lg text-gray-300 sm:text-2xl md:text-3xl max-w-[1400px] text-justify m-2">
          <p>
            A passionate <strong>Computer Science student</strong> from India, 
            driven by a curiosity for technology and a love for solving complex problems. 
            With a keen interest in <strong>cybersecurity</strong> and <strong>machine learning</strong>, 
            I actively engage in <em>Capture The Flag (CTF)</em> 
            challenges to sharpen my skills and stay on the cutting edge of security practices.
          </p> <br />
          <p>
            Beyond the realm of coding, I’m an avid <strong>photographer</strong>, 
            captivated by the art of capturing moments through my lens. 
            My fascination with cameras fuels my creativity, and I often blend my technical skills with my artistic side, 
            exploring projects that involve <em>image processing</em> and <em>machine learning</em>.
          </p> <br />
          <p>
            I believe in breaking away from conventional paths and pursuing <strong>innovative ideas</strong> 
            that can make a meaningful impact. Whether it’s through crafting efficient algorithms, or capturing stunning visuals, 
            I’m always eager to learn, collaborate, and create. Let's connect!
          </p>
        </div>
      </section>
</SectionWrapper>