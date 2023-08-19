//populates video player for socal_trafficwatch
function populate( isStream ){
	var today = new Date();
	if( isStream == 'true' ){	
		// San Diego
		videojs("my-video0").src({src: "https://wzmedia.dot.ca.gov/D11/NB_5_JSO_Rte_8.stream/playlist.m3u8", type: 'application/x-mpegURL'});
		videojs("my-video0").poster("https://cwwp2.dot.ca.gov/data/d11/cctv/image/c008i5justsouthofi8/c008i5justsouthofi8.jpg" + "?" + today.getTime());
		// Palm Springs
		videojs("my-video1").src({src: "https://wzmedia.dot.ca.gov/D8/LB-8_10_TPSdemo1.stream/playlist.m3u8", type: 'application/x-mpegURL'});
		videojs("my-video1").poster("https://cwwp2.dot.ca.gov/data/d8/cctv/image/i10tpas1whitewaterrestareawb/i10tpas1whitewaterrestareawb.jpg" + "?" + today.getTime());
		// San Bernadino
		videojs("my-video2").src({src: "https://wzmedia.dot.ca.gov/D8/LB-8_215_206.stream/playlist.m3u8", type: 'application/x-mpegURL'});
		videojs("my-video2").poster("https://cwwp2.dot.ca.gov/data/d8/cctv/image/i215206nofthirdstreet/i215206nofthirdstreet.jpg" + "?" + today.getTime());
		// Temecula
		videojs("my-video3").src({src: "https://wzmedia.dot.ca.gov/D8/LB-8_15_307.stream/playlist.m3u8", type: 'application/x-mpegURL'});
		videojs("my-video3").poster("https://cwwp2.dot.ca.gov/data/d8/cctv/image/i15307075minowinchesterroad/i15307075minowinchesterroad.jpg" + "?" + today.getTime());
		// Carpinteria
		videojs("my-video4").src({src: "https://wzmedia.dot.ca.gov/D5/101atBailardAve.stream/playlist.m3u8", type: 'application/x-mpegURL'});
		videojs("my-video4").poster("https://cwwp2.dot.ca.gov/data/d5/cctv/image/us101bailardavenue/us101bailardavenue.jpg" + "?" + today.getTime());
		// Santa Barbara
		videojs("my-video5").src({src: "https://wzmedia.dot.ca.gov/D5/101atGardenSt.stream/playlist.m3u8", type: 'application/x-mpegURL'});
		videojs("my-video5").poster("https://cwwp2.dot.ca.gov/data/d5/cctv/image/us101gardenstreet/us101gardenstreet.jpg" + "?" + today.getTime());
	}
}