<!doctype html>

<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>Kahoot test!</title>
	<meta name="description" content="Kahoot test project">
	<meta name="author" content="Kahoot">

	<meta property="og:title" content="Kahoot test project">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://kahoot.com">
	<meta property="og:description" content="Kahoot test project. Creating a header with banner and a menu.">
	<meta property="og:image" content="share-image.png">

	<!-- Dummy favicon URLS	-->
	<link rel="icon" href="/favicon/url">
	<link rel="icon" href="/favicon/svg/url" type="image/svg+xml">
	<link rel="apple-touch-icon" href="/apple-touch-icon/url">

	<link rel="stylesheet" href="./assets/build/css/app.css">

</head>

<body>
	<a class="sr-only button button--green" title="Skip to content link" aria-label="Skip to content link" href="#content" tabindex="0">Skip to content</a>

	<?php include_once 'parts/header.php'; ?>

	<main id="content">
		<?php include_once 'parts/hero.php'; ?>
	</main>

	<?php include_once 'parts/footer.php'; ?>

	<script src="assets/build/js/app.js"></script>
</body>
</html>