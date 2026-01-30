<div vw class="enabled">
    <div class="help-acessibility-button">
        <a
            href="<?php echo $app->createUrl('site', 'page', ['como-usar']) ?>"
            class="icon icon-help"
        >
           <span class="help-text">Aprenda a usar o mapa cultural</span>
        </a>
    </div>
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
        <div class="vw-plugin-top-wrapper"></div>
    </div>
</div>
<script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
<script>
    new window.VLibras.Widget('https://vlibras.gov.br/app'); 
</script>