private string _sLocalPath = @"c:\skis\tampcheck";
private string _sTargetPath = @"c:\skis";
private string _sFilename = "capicom.dll";

public int Download()
{
    int nRet = 0;

    try
    {
        Cls_Download oCls_Download = new Cls_Download();

        if (Is64BitOS)
            AppPath = _sTargetPath;

        oCls_Download.DownloadLocalFile(LocalPath, AppPath, Filename);
        
        nRet = 1;
    }
    catch (Exception ex)
    {
        Console.WriteLine("下載 DLL 時發生錯誤: " + ex.Message);
        nRet = -1;
    }

    return (nRet);
}

//----------------------------------------------------------------
// 從本機複製檔案
//----------------------------------------------------------------
public int DownloadLocalFile(string sSourcePath, string sTargetPath, string sTargetFilename)
{
    int nRet = 0;

    try
    {
        //複製檔案
        File.Copy(Path.Combine(sSourcePath, sTargetFilename), Path.Combine(sTargetPath, sTargetFilename), true);

        nRet = 1;
    }
    catch (Exception ex)
    {
        Console.WriteLine("下載 " + sTargetFilename + " 時發生錯誤: " + ex.Message);
        nRet = -1;
    }

    return (nRet);
}

public string AppPath
{
    set
    {
        _sAppPath = value;
    }
    get
    {
        return _sAppPath;
    }
}

// LocalPath
public string LocalPath
{
    set
    {
        _sLocalPath = value;
    }
    get
    {
        return _sLocalPath;
    }
}

public string TargetPath
{
    set
    {
        _sTargetPath = value;
    }
    get
    {
        return _sTargetPath;
    }
}
// Filename
public string Filename
{
    set
    {
        _sFilename = value;
    }
    get
    {
        return _sFilename;
    }
}