try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Static by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.static-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}