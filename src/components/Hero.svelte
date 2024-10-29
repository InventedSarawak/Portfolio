<script lang="ts">
    import Header from "./Header.svelte";
    import SectionWrapper from "./SectionWrapper.svelte";
	import WorkSkills from "./WorkSkills.svelte";
</script>

<SectionWrapper id=''>
    <Header />
    
    <div class="flex flex-col md:flex-row items-center justify-center gap-10 pb-10 md:pb-14">
        <!-- Text Section -->
        <div class="flex-1 md:flex-[3] text-center md:text-left">
            <h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-7xl max-w-[1200px] mx-auto w-full font-semibold">
                <span class="text-indigo-400">I</span>
                 am 
                 <span class="text-indigo-400">Vedant Kesarwani</span>
                 <br />
                 <span>A</span>
                 <span class="text-indigo-400">Photographer</span>
                 <WorkSkills />
            </h2>
        
        </div>
    
        <!-- Image Section -->
        <div class="flex-1">
            <img src="src\assets\ProfileImage.JPG" alt="Vedant Kesarwani" class="w-full h-auto rounded-lg" />
            <!-- Add your desired styling to the image -->
        </div>
    </div>
    
</SectionWrapper>